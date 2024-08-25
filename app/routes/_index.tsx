import type { MetaFunction } from "@netlify/remix-runtime";
import { Link } from "@remix-run/react";
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
        className="m-auto w-3/4 md:w-1/2"
        alt="church-logo"
      />
      <div key="title-credits" className="church-font text-center p-1 py-2">
        <p className="text-2xl">Dana Ranch Ward</p>
        <p className="text-3xl">Sacrament Meeting</p>
        <p className="text-2xl">August 25, 2024</p>
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
            <div className="flex-none px-1">
              <Link to="/business">Matthew Hulse</Link>
            </div>
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

        <div className="bg-sky-500 rounded p-4 text-white my-2">
          <em className="font-bold">Announcements</em>
          <ol className="list-decimal ml-5">
            <li className="py-1">
              Lorden Jones, for many years a member of Kimball Stake and most recently Meadowgreen Ward,
              passed away Monday. His funeral will be Tuesday, August 27, 2024 in the Lindsay-Pueblo building.
              The viewing will be at 10:00 am with the services at 11:00. 
            </li>
            <li className="py-1">
              The Relief Society Stay-cation will be on Sept 6th at 6:30pm and Sept 7th at 9am at the stake center.
            </li>
            <li className="py-1">
              Tithing Declaration is underway- signup sheets are on the door by the clerks office. Please sign up at
              your convenience, Bishop would like to meet with everyone.
            </li>
          </ol>
        </div>

        <div className="py-2">
          <div className="py-1">
            <div className="flex">
              <div className="flex-none px-1">Opening Hymn</div>
              <div className="flex-1 mb-1 border-b border-dashed border-stone-300 height-18">
              </div>
              <div className="flex-none px-1 text-right">106</div>
            </div>
            <div className="text-center font-sm truncate zero-auto max-75">
              <div className="italic">God Speed the Right</div>
              {
                /* {hymn.link
            ? (
              <a
                href={hymn.link}
                target="_blank"
                rel="noreferrer"
                className="font-medium text-sky-600 underline italic"
              >
                {hymn.title}
              </a>
            )
            : <div className="italic">{hymn.title}</div>} */
              }
            </div>
          </div>

          <div className="flex py-1">
            <div className="flex-none px-1">Invocation</div>
            <div className="flex-1 mb-1 border-b border-dashed border-stone-300 height-18">
            </div>
            <div className="flex-none px-1">Daisy Capps</div>
          </div>
        </div>

        <div className="text-center py-4">
          <em className="font-semibold">Ward Business</em>
        </div>

        <div className="py-2">
          <div className="py-1">
            <div className="flex">
              <div className="flex-none px-1">Sacrament Hymn</div>
              <div className="flex-1 mb-1 border-b border-dashed border-stone-300 height-18">
              </div>
              <div className="flex-none px-1 text-right">169</div>
            </div>
            <div className="text-center font-sm truncate zero-auto max-75">
              <div className="italic">As Now we Take the Sacrament</div>
            </div>
          </div>
        </div>

        <div className="text-center py-4">
          <em className="font-semibold">Administration of the Sacrament</em>
        </div>
        {
          /* <div className="text-center py-4">
        <em className="font-semibold">Bearing of Testimonies</em>
      </div> */
        }

        <div className="py-2">
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
        </div>

        <div className="py-2">
          <div className="py-1">
            <div className="flex">
              <div className="flex-none px-1">Closing Hymn</div>
              <div className="flex-1 mb-1 border-b border-dashed border-stone-300 height-18">
              </div>
              <div className="flex-none px-1 text-right">108</div>
            </div>
            <div className="text-center font-sm truncate zero-auto max-75">
              <div className="italic">The Lord is my Shepherd</div>
            </div>
          </div>

          <div className="flex py-1">
            <div className="flex-none px-1">Benediction</div>
            <div className="flex-1 mb-1 border-b border-dashed border-stone-300 height-18">
            </div>
            <div className="flex-none px-1">Michael Beagle</div>
          </div>
        </div>
      </div>

      <hr className="h-px my-8 bg-gray-400 border-0" />
    </div>
  );
}
