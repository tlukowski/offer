function FormStepper({
  activeIndex,
  stepCounter,
}: {
  activeIndex: number;
  stepCounter: number;
}) {
  const items = Array.from({ length: stepCounter }, (_, index) => {
    const isActive = activeIndex >= index;
    const itemClass = isActive
      ? 'h-[14px] w-[14px]'
      : 'h-2 w-2 bg-secondaryPurple';
    return (
      <div
        key={index}
        className={`items-center rounded-full bg-primaryPurple transition-all duration-300 ${itemClass}`}
      ></div>
    );
  });

  return <div className="mb-6 flex items-center gap-2">{items}</div>;
}

export { FormStepper };
