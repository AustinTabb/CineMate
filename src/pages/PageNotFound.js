import PageNotFoundImage from "../assets/images/pagenotfound.png";
import { HomeButton } from "../components";
import { useTitle } from "../hooks";

export const PageNotFound = () => {
  useTitle("404 Page Not Found");

  return (
    <main>
      <section className="flex flex-col justify-center px-2">
        <div className="flex flex-col items-center my-4">
          <p className="text-7xl text-grey-700 font-bold my-10 dark:text-white">
            404, Opps!
          </p>
          <div className="max-w-2xl">
            <img
              className="rounded"
              src={PageNotFoundImage}
              alt="404 Page Not Found"
            />
          </div>
        </div>
        <HomeButton />
      </section>
    </main>
  );
};
