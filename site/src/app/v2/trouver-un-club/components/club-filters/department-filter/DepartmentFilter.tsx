'use client';

import cn from 'classnames';
import { useSearchParams } from 'next/navigation';
import Select, { SingleValue } from 'react-select';
import { Option, selectStyles } from '../ClubFilters';
import styles from '../styles.module.scss';
import { SEARCH_QUERY_PARAMS } from '@/app/constants/search-query-params';
import { GeoGouvDepartment } from '../../../../../../../types/Department';
import { useCallback, useEffect, useState } from 'react';

interface Props {
  departments: GeoGouvDepartment[];
  onDepartmentChanged: (department?: string) => void;
  selectedRegionCode?: string;
}

const DepartmentFilter = ({ departments, onDepartmentChanged }: Props) => {
  const searchParam = useSearchParams();
  const departmentCodeSearchParam =
    searchParam && searchParam.get(SEARCH_QUERY_PARAMS.departmentCode);

  const regionCodeSearchParam = searchParam && searchParam.get(SEARCH_QUERY_PARAMS.regionCode);
  const [availableDepartments, setAvailableDepartments] = useState<GeoGouvDepartment[]>(
    departments.filter((department) => {
      if (!regionCodeSearchParam) return true;

      return department.codeRegion === regionCodeSearchParam;
    }),
  );

  const formatOptions = (departments: GeoGouvDepartment[]) =>
    departments.map((department) => ({
      label: department.nom,
      value: department.code,
    }));

  useEffect(() => {
    setAvailableDepartments(
      departments.filter((department) => {
        if (!regionCodeSearchParam) return true;

        return department.codeRegion === regionCodeSearchParam;
      }),
    );
  }, [departments, regionCodeSearchParam]);

  const defaultDepartmentOption = departments.find((r) => r.code === departmentCodeSearchParam);
  const departmentChangeHandler = (newValue: SingleValue<Option>) => {
    if (!newValue) {
      onDepartmentChanged();
    } else {
      onDepartmentChanged(newValue.value);
    }
  };

  return (
    <div className={styles['label-container']}>
      <label htmlFor="department" className={styles.label}>
        Choix d&apos;un département
      </label>
      <div className={styles['input-container']}>
        <Select
          instanceId="department-select-id"
          className={styles.select}
          isClearable
          placeholder="Tout"
          isSearchable
          name="department"
          options={formatOptions(availableDepartments)}
          onChange={departmentChangeHandler}
          styles={selectStyles}
          {...(defaultDepartmentOption && {
            defaultValue: {
              label: defaultDepartmentOption.nom,
              value: defaultDepartmentOption.code,
            },
          })}
        />
      </div>
    </div>
  );
};

export default DepartmentFilter;
