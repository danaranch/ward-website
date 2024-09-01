import type { MetaFunction } from "@netlify/remix-runtime";
import ActionButton from "~/components/ActionButton";

export const meta: MetaFunction = () => {
  return [
    { title: "Dana Ranch Ward" },
    { name: "description", content: "Dana Ranch Ward Order Of Services" },
  ];
};

export default function Index() {
  return (
    <div className="w-full h-full">
      <img src="/img/bethseda.jpeg" className="pb-4" alt="jesus" />
      <img
        src="/img/modern-logo.png"
        className="m-auto w-3/4 md:w-1/2 xl:w-1/3"
        alt="church-logo"
      />
      <div key="title-credits" className="church-font text-center p-1 py-2">
        <p className="text-2xl">Dana Ranch Ward</p>
        <p className="text-3xl">Sacrament Meeting</p>
        <p className="text-2xl">September 1, 2024</p>
      </div>

      <div className="pt-4">
        <ActionButton
          link="https://zoom.us/j/98508434243"
          text="Join via broadcast"
        />
      </div>
      <hr className="h-px my-8 bg-gray-400 border-0" />

      <div id="services" className="mx-2">
        <div className="py-2">
          <div className="flex py-1">
            <div className="flex-none px-1">Presiding</div>
            <div className="flex-1 mb-1 border-b border-dashed border-stone-300">
            </div>
            <div className="flex-none px-1">Bishop Kent</div>
          </div>

          <div className="flex py-1">
            <div className="flex-none px-1">Conducting</div>
            <div className="flex-1 mb-1 border-b border-dashed border-stone-300">
            </div>
            <div className="flex-none px-1">David Kolstad</div>
          </div>

          <div className="flex py-1">
            <div className="flex-none px-1">Organist</div>
            <div className="flex-1 mb-1 border-b border-dashed border-stone-300">
            </div>
            <div className="flex-none px-1">Joe Capps</div>
          </div>

          <div className="flex py-1">
            <div className="flex-none px-1">Chorister</div>
            <div className="flex-1 mb-1 border-b border-dashed border-stone-300">
            </div>
            <div className="flex-none px-1">Laurel Cronin</div>
          </div>
        </div>

        <div className="bg-sky-600 rounded p-4 text-white my-2 pt-8 relative overflow-hidden">
          <img
            className="absolute left-0 top-0 w-full rounded opacity-75"
            src="/img/light-rays.svg"
            alt="light-rays"
          />
          <em className="sticky text-lg font-semibold">Announcements</em>
          <ol className="list-decimal ml-5 sticky">
            <li className="py-1">
              Tithing Declaration is underway, signup sheets are on the door by
              the clerks office.
            </li>
            <li className="py-1">
              The Relief Society Staycation will be on September 6th at 6:30pm
              and September 7th at 9am at the stake center.
            </li>
            <li className="py-1">
              Ward Conference will be on Sunday, September 8th.
            </li>
          </ol>
        </div>

        <div className="py-2">
          <div className="py-1">
            <div className="flex">
              <div className="flex-none px-1">Opening Hymn</div>
              <div className="flex-1 mb-1 border-b border-dashed border-stone-300 height-18">
              </div>
              <div className="flex-none px-1 text-right">58</div>
            </div>
            <div className="text-center font-sm truncate zero-auto max-75">
              <div className="italic">Come Ye Children of the Lord</div>
            </div>
          </div>

          <div className="flex py-1">
            <div className="flex-none px-1">Invocation</div>
            <div className="flex-1 mb-1 border-b border-dashed border-stone-300 height-18">
            </div>
            <div className="flex-none px-1">Joy Kessler</div>
          </div>
        </div>

        <div className="text-center py-4">
          <em className="font-semibold text-lg">Ward Business</em>
        </div>

        <div className="py-2">
          <div className="py-1">
            <div className="flex">
              <div className="flex-none px-1">Sacrament Hymn</div>
              <div className="flex-1 mb-1 border-b border-dashed border-stone-300 height-18">
              </div>
              <div className="flex-none px-1 text-right">172</div>
            </div>
            <div className="text-center font-sm truncate zero-auto max-75">
              <div className="italic">In Humility, Our Savior</div>
            </div>
          </div>
        </div>

        <div className="text-center py-4">
          <em className="font-semibold text-lg">
            Administration of the Sacrament
          </em>
        </div>

        <div className="text-center py-4">
          <em className="font-semibold text-lg">Bearing of Testimonies</em>
        </div>

        {
          /* <div className="py-2">
          <div className="flex py-1">
            <div className="flex-none px-1">Speaker</div>
            <div className="flex-1 mb-1 border-b border-dashed border-stone-300 height-18">
            </div>
            <div className="flex-none px-1">Claira Speakman</div>
          </div>

          <div className="flex py-1">
            <div className="flex-none px-1">Speaker</div>
            <div className="flex-1 mb-1 border-b border-dashed border-stone-300 height-18">
            </div>
            <div className="flex-none px-1">Cindy Fast</div>
          </div>

          <div className="py-1">
            <div className="flex">
              <div className="flex-none px-1">Intermediate Hymn</div>
              <div className="flex-1 mb-1 border-b border-dashed border-stone-300 height-18">
              </div>
              <div className="flex-none px-1 text-right">85</div>
            </div>
            <div className="text-center font-sm truncate zero-auto max-75">
              <div className="italic">How Firm a Foundation</div>
            </div>
          </div>

          <div className="flex py-1">
            <div className="flex-none px-1">Speaker</div>
            <div className="flex-1 mb-1 border-b border-dashed border-stone-300 height-18">
            </div>
            <div className="flex-none px-1">Michael Clement</div>
          </div>
        </div> */
        }

        <div className="py-2">
          <div className="py-1">
            <div className="flex">
              <div className="flex-none px-1">Closing Hymn</div>
              <div className="flex-1 mb-1 border-b border-dashed border-stone-300 height-18">
              </div>
              <div className="flex-none px-1 text-right">117</div>
            </div>
            <div className="text-center font-sm truncate zero-auto max-75">
              <div className="italic">Come Unto Jesus</div>
            </div>
          </div>

          <div className="flex py-1">
            <div className="flex-none px-1">Benediction</div>
            <div className="flex-1 mb-1 border-b border-dashed border-stone-300 height-18">
            </div>
            <div className="flex-none px-1">Terri Smith</div>
          </div>
        </div>
      </div>

      <hr className="h-px my-8 bg-gray-400 border-0" />
    </div>
  );
}
