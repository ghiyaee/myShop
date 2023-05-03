import Link from "next/link";

const checkOut = () => {
    return (
      <div className=" container m-auto mt-4 ">
        <form className="mx-auto max-w-screen-md ">
          <h2 className="text-3xl">ورود / ثبت نام</h2>
          <div className="my-4">
            <label htmlFor="email">ایمیل</label>
            <input
              htmlFor="email"
              className="w-full"
              id="email"
              autoFocus
            ></input>
            <div className="mb-4">
              <label htmlFor="password">پسورد</label>
              <input
                htmlFor="password"
                className="w-full"
                id="password"
              ></input>
            </div>
            <div className="mb-4">
              <button className="primery-button w-full">ورود</button>
            </div>
            <div className="mb-4 text-2xl">
              ثبت نام نکردید؟ &nbsp;
              <Link href="regsiter" className="text-blue-500 ">
                ثبت نام کنید
              </Link>
            </div>
          </div>
        </form>
      </div>
    );
}

export default checkOut;