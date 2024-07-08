const Loader = (load: any) => {
  return <div id={load ? "preloader" : "preloader-none"}></div>;
};

export default Loader;
