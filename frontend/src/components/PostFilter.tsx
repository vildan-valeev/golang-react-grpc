import React, {FC} from 'react';
import MyInput from "./UI/input/MyInput";
import MySelect from "./UI/select/MySelect";

export interface IFilter {
    sort: string
    query: string
}

interface PostFilterProps {
    filter: IFilter
    setFilter: (p: { query: string; sort: any }) => void
}

const PostFilter: FC<PostFilterProps> = ({filter, setFilter}) => {
  return (
    <div>
      <MyInput
        value={filter.query}
        onChange={(e: { target: { value: any; }; }) => setFilter({...filter, query: e.target.value})}
        placeholder="Поиск"

      />
      <MySelect
        value={filter.sort}
        onChange={(selectedSort: any) => setFilter({...filter, sort: selectedSort})}
        defaultValue="Сортировка"
        options={[
          {value:"title", name: "По названию"},
          {value:"body", name: "По описанию"}
        ]}
      />

    </div>
  );
};

export default PostFilter;
