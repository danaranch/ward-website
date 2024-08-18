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
        <p className="text-2xl">August 19, 2024</p>
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
            <div className="flex-none px-1">Whitney Kolstad</div>
          </div>

          <div className="flex py-1">
            <div className="flex-none px-1">Chorister</div>
            <div className="flex-1 mb-1 border-b border-dashed border-stone-300">
            </div>
            <div className="flex-none px-1">Daisy Capps</div>
          </div>
        </div>

        <div className="bg-sky-500 rounded p-4 text-white my-2">
          <em className="font-bold">Announcements</em>
          <ol className="list-decimal ml-5">
            <li className="py-1">
              Ward pool party will be tomorrow, Monday Aug 19th from 6:30pm -
              8:30pm
            </li>
            <li className="py-1">
              We have 2 baptisms this week: Lehi Sloan on Tuesday Aug 20th at
              6pm, and Amethyst Murray on Saturday Aug 24th at 2pm
            </li>
            <li className="py-1">
              The Relief Society Stay-cation will be on Sept 6th at 6:30pm and Sept 7th at 9am at the stake center
            </li>
            <li className="py-1">
              Tithing Declaration is underway- signup sheets are on the door by the clerks office. Please sign up at your convenience, Bishop would like to meet with everyone
            </li>
          </ol>
        </div>

        <div className="py-2">
          <div className="py-1">
            <div className="flex">
              <div className="flex-none px-1">Opening Hymn</div>
              <div className="flex-1 mb-1 border-b border-dashed border-stone-300 height-18">
              </div>
              <div className="flex-none px-1 text-right">223</div>
            </div>
            <div className="text-center font-sm truncate zero-auto max-75">
              <div className="italic">Have I Done Any Good?</div>
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
            <div className="flex-none px-1">By Invitation</div>
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
              <div className="flex-none px-1 text-right">196</div>
            </div>
            <div className="text-center font-sm truncate zero-auto max-75">
              <div className="italic">Jesus Once of Humble Birth</div>
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
            <div className="flex-none px-1">Phoenix Bellessa</div>
          </div>

          <div className="flex py-1">
            <div className="flex-none px-1">Speaker</div>
            <div className="flex-1 mb-1 border-b border-dashed border-stone-300 height-18">
            </div>
            <div className="flex-none px-1">Elder Cattron</div>
          </div>

          <div className="py-1">
            <div className="flex">
              <div className="flex-none px-1">Intermediate Hymn</div>
              <div className="flex-1 mb-1 border-b border-dashed border-stone-300 height-18">
              </div>
              <div className="flex-none px-1 text-right">6</div>
            </div>
            <div className="text-center font-sm truncate zero-auto max-75">
              <div className="italic">Redeemer of Isreal</div>
            </div>
          </div>

          <div className="flex py-1">
            <div className="flex-none px-1">Speaker</div>
            <div className="flex-1 mb-1 border-b border-dashed border-stone-300 height-18">
            </div>
            <div className="flex-none px-1">Elder Riches</div>
          </div>
        </div>

        <div className="py-2">
          <div className="py-1">
            <div className="flex">
              <div className="flex-none px-1">Closing Hymn</div>
              <div className="flex-1 mb-1 border-b border-dashed border-stone-300 height-18">
              </div>
              <div className="flex-none px-1 text-right">129</div>
            </div>
            <div className="text-center font-sm truncate zero-auto max-75">
              <div className="italic">Where Can I Turn For Peace?</div>
            </div>
          </div>

          <div className="flex py-1">
            <div className="flex-none px-1">Benediction</div>
            <div className="flex-1 mb-1 border-b border-dashed border-stone-300 height-18">
            </div>
            <div className="flex-none px-1">By Invitation</div>
          </div>
        </div>
      </div>

      <hr className="h-px my-8 bg-gray-400 border-0" />
    </div>
  );
}
