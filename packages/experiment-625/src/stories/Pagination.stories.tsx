import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Pagination } from '../components/Pagination';

const meta: Meta<typeof Pagination> = {
  component: Pagination,
  title: 'Pagination',
};
export default meta;

const Template = (args: { itemsPerPage: number }) => {
  const [data, setData] = useState<any[]>([]);

  const handleListChange = (list: any) => {
    setData(list.items);
  };

  return (
    <div>
      <Pagination
        {...args}
        onListChange={handleListChange}
        url="https://jsonplaceholder.typicode.com/posts"
      />
      <ul>
        {data.map(item => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};

export const Example: StoryObj<typeof Pagination> = {
  render: (args) => <Template {...args} />,
  args: {
    itemsPerPage: 10,
    url: "https://jsonplaceholder.typicode.com/posts",
  },
};
