'use client';

import { useSearchParams } from 'next/navigation';
import Select, { SingleValue } from 'react-select';
import { Option, selectStyles } from '../ClubFilters';
import styles from '../styles.module.scss';
import { SEARCH_QUERY_PARAMS } from '@/app/constants/search-query-params';
import { GeoGouvDepartment } from '../../../../../../../types/Department';
import { useEffect, useState } from 'react';

interface Props {
  departments: GeoGouvDepartment[];
  isDisabled: boolean;
  onDepartmentChanged: (department?: string) => void;
  selectedRegionCode?: string;
}

const DepartmentFilter = ({ departments, isDisabled, onDepartmentChanged }: Props) => {
  const searchParam = useSearchParams();
  const departmentCode = searchParam && searchParam.get(SEARCH_QUERY_PARAMS.departmentCode);
  const regionCode = searchParam && searchParam.get(SEARCH_QUERY_PARAMS.regionCode);

  const [availableDepartments, setAvailableDepartments] = useState<GeoGouvDepartment[]>(
    departments.filter((department) => {
      if (!regionCode) return true;

      return department.codeRegion === regionCode;
    }),
  );

  const [selectedDepartmentCode, setSelectedDepartmentCode] = useState<string | null>(null);

  const formatOptions = (departments: GeoGouvDepartment[]) =>
    departments.map((department) => ({
      label: department.nom,
      value: department.code,
    }));

  useEffect(() => {
    setAvailableDepartments(
      departments.filter((department) => {
        if (!regionCode) return true;

        return department.codeRegion === regionCode;
      }),
    );
  }, [departments, regionCode]);

  useEffect(() => {
    setSelectedDepartmentCode(departmentCode);
  }, [departmentCode]);

  const buildSelectedDepartmentOption = () => {
    const geoGouvDepartment = departments.find((r) => r.code === selectedDepartmentCode);
    if (geoGouvDepartment) {
      return {
        label: geoGouvDepartment.nom,
        value: geoGouvDepartment.code,
      };
    } else {
      return null;
    }
  };

  const departmentChangeHandler = (newValue: SingleValue<Option>) => {
    if (!newValue) {
      onDepartmentChanged();
    } else {
      onDepartmentChanged(newValue.value);
    }
    setSelectedDepartmentCode(newValue?.value || null);
  };

  return (
    <div className={styles['label-container']}>
      <label htmlFor="department" className={styles.label}>
        Choix d&apos;un département
      </label>
      <div className={styles['input-container']}>
        <Select
          isDisabled={isDisabled}
          instanceId="department-select-id"
          className={styles.select}
          isClearable
          placeholder="Tout"
          isSearchable
          name="department"
          options={formatOptions(availableDepartments)}
          onChange={departmentChangeHandler}
          styles={selectStyles}
          value={buildSelectedDepartmentOption()}
        />
      </div>
    </div>
  );
};

export default DepartmentFilter;
