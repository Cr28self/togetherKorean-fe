// <button
//     className="btn-ghost min-h-16 btn-lg btn h-24 px-10 text-lg"
//     type={'button'}
// >
//     {text}
// </button>

// Navbar에서 표시되는 버튼
export default function NavbarBtn({ title, children }) {
  return (
    <div className="dropdown-end dropdown-hover dropdown lg:w-1/6">
      <label
        tabIndex={0}
        className="min-h-14 btn h-24 w-full whitespace-nowrap border-none bg-white px-3 text-[12px]"
      >
        {title}
      </label>

      <ul
        tabIndex={0}
        className="dropdown-content menu rounded-box z-[1] w-52 bg-base-100 p-2 shadow"
      >
        {/*  map */}
        {children}
      </ul>
    </div>
  );
}
