import { Pagination } from '@mantine/core';

const Paginator=()=> {
  return (
    <Pagination
      total={6}
      position="center"
      styles={(theme) => ({
        control: {
          '&[data-active]': {
            backgroundImage: theme.fn.gradient({ from: 'blue', to: 'rgb(59 130 246)' }),
          },
        },
      })}
    />
  );
}

export default Paginator