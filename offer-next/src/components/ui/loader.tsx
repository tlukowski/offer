const Loader = () => {
  let circleCommonClasses = 'h-2.5 w-2.5 bg-primaryPurple rounded-full';

  return (
    <div className="absolute left-1/2 top-1/2 flex ">
      <div className={`${circleCommonClasses} mr-1 animate-bounce`}></div>
      <div className={`${circleCommonClasses} mr-1 animate-bounce`}></div>
      <div className={`${circleCommonClasses} mr-1 animate-bounce`}></div>
    </div>
  );
};

export default Loader;
