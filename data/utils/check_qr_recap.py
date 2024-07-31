import asyncio
import csv
import time
import os
from dotenv import load_dotenv

from playwright.async_api import async_playwright

load_dotenv()

codes_path_file = os.environ['CODES_PATH_FILE']
codes_failed_output_path_file = os.environ['CODES_FAILED_OUTPUT_PATH_FILE']
chunk_size = int(os.environ['CODES_CHUNK_SIZE'])

start_time = time.time()

# Tweak the chunk size if memory consumption is too high

async def main():
    # Read URLs from CSV file
    # URL must with the format http://<domain>/v2/code/scan#url or http://<domain>/v2/code/scan/url (for old codes)
    with open(codes_path_file, newline='') as csvfile:
        reader = csv.DictReader(csvfile)
        urls = [row['url'] for row in reader]

        for i in range(0, len(urls), chunk_size):
            urls_chunk = urls[i:i + chunk_size]
            tasks = [check_code_invalide(url) for url in urls_chunk]
            print(f'processing chunk {i + chunk_size}')
            await asyncio.gather(*tasks)
    
    end_time = time.time()
    execution_time = (end_time - start_time) / 60

    print(f"Total execution time: {execution_time:.2f} mins")


async def log_error(url):
    with open(codes_failed_output_path_file, "a") as file:
        file.write(url + "\n")

async def check_code_invalide(url):
    TIMEOUT = 3000

    try:
        async with async_playwright() as p:
            browser = await p.chromium.launch(headless=True)
            page = await browser.new_page()
            
            await page.goto(url)
            
            # Wait for client side request to the server
            text_is_present = await page.wait_for_selector("text=Voici votre pass Sport", timeout=TIMEOUT)

            if not text_is_present:
                await log_error(url)
    except Exception as e:
        print(f"Error checking URL {url}: {str(e)}")
        await log_error(url)
    finally:
        await browser.close()

if __name__ == "__main__":
    asyncio.run(main())
