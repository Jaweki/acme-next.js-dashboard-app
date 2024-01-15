import styles from '@/app/ui/loader.module.css';

const loading = () => {
  return (
    <div
      className={`flex h-full w-full items-center justify-center bg-transparent opacity-30`}
    >
      <div
        className={`${styles.loading} h-[70px] w-[70px] rounded-full border-teal-950 border-l-transparent border-r-transparent`}
      ></div>
    </div>
  );
};

export default loading;
