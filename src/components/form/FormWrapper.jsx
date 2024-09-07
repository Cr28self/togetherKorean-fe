// Auth와 관련되거나 (Login,Register) InputForm을 감싸는 wrapper 컴포넌트

export default function FormWrapper({ submitFn, children }) {
  return (
    <form
      className="mx-auto flex w-1/2 min-w-[300px] flex-col rounded bg-white px-8 pb-8 pt-6 shadow-md"
      onSubmit={submitFn}
      noValidate
    >
      {children}
    </form>
  );
}
