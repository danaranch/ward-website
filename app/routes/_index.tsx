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
    /**
     * TODO: New component
     * - gets date automatically
     * - switces hero img by month automatically
     */
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
        <p className="text-2xl">September 22, 2024</p>
      </div>

      {
        /*
      TODO: Remove component from index when we get posters for foyer
      */
      }
      <div className="pt-4">
        <ActionButton
          link="https://youtube.com/live/Em3-wwjtwtA?feature=share"
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
            <div className="flex-none px-1">Matthew Hulse</div>
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
            <li className="pt-1">
              Elder Bednar will be a guest speaker at a fireside tonight for all
              young adults at the Tempe Institute building. Fireside starts at
              6pm.
            </li>
            <li className="pt-1">
              General Conference is in 2 weeks, for more info please visit
              churchofjesuschrist.org. Our Fast Sunday for October will be on
              Oct 13th.
            </li>
            <li className="pt-1">
              Our ward is in charge of cleaning the building for the rest of the
              year, so be on the lookout for opportunities to help with those
              efforts.
            </li>
            <li className="pt-1">
              The Primary Program is next week on September 29th.
            </li>
            <li className="pt-1">
              Tithing declaration will conclude at the end of November. To sign
              up please use the signup sheets by the clerk's office.
            </li>
            <li className="pt-1">
              Mission and Life Skills Prep for all Juniors and Seniors is held
              every 2nd and 4th Sunday at 4pm in the Relief Society room.
            </li>
            <li className="pt-1">
              Linger longer will take place today after church in the cultral hall.
            </li>
          </ol>
        </div>

        <div className="py-2">
          {
            /*
          TODO: New component
          - Use for all program items
          - 3 props: leftContent, rightContent, middleContent
          - replace everywhere
          */
          }
          <div className="py-1">
            <div className="flex">
              <div className="flex-none px-1">Opening Hymn</div>
              <div className="flex-1 mb-1 border-b border-dashed border-stone-300 height-18">
              </div>
              <div className="flex-none px-1 text-right">81</div>
            </div>
            <div className="text-center font-sm truncate zero-auto max-75">
              <div className="italic">Press Forward Saints</div>
            </div>
          </div>

          <div className="flex py-1">
            <div className="flex-none px-1">Invocation</div>
            <div className="flex-1 mb-1 border-b border-dashed border-stone-300 height-18">
            </div>
            <div className="flex-none px-1">Garet Flake</div>
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
              <div className="flex-none px-1 text-right">175</div>
            </div>
            <div className="text-center font-sm truncate zero-auto max-75">
              <div className="italic">O God, the Eternal Father</div>
            </div>
          </div>
        </div>

        <div className="text-center py-4">
          <em className="font-semibold text-lg">
            Administration of the Sacrament
          </em>
        </div>

        {
          /* <div className="text-center py-4">
          <em className="font-semibold text-lg">Bearing of Testimonies</em>
        </div> */
        }

        <div className="py-2">
          <div className="flex py-1">
            <div className="flex-none px-1">Speaker</div>
            <div className="flex-1 mb-1 border-b border-dashed border-stone-300 height-18">
            </div>
            <div className="flex-none px-1">Natalya Cox</div>
          </div>

          <div className="py-1">
            <div className="flex">
              <div className="flex-none px-1">Musical Number</div>
              <div className="flex-1 mb-1 border-b border-dashed border-stone-300 height-18">
              </div>
              <div className="flex-none px-1 text-right">Dillon and Tegan Grenko</div>
            </div>
            <div className="text-center font-sm truncate zero-auto max-75">
              <div className="italic">
                &quot;I Know That My Redeemer Lives&quot;
              </div>
            </div>
          </div>
          {
            /*
          <div className="flex py-1">
            <div className="flex-none px-1">Intermediate Hymn</div>
            <div className="flex-1 mb-1 border-b border-dashed border-stone-300 height-18">
            </div>
            <div className="flex-none px-1 text-right">105</div>
          </div>
          <div className="text-center font-sm truncate zero-auto max-75">
            <div className="italic">Master, the Tempest is Raging</div>
          </div>
          */
          }

          <div className="flex py-1">
            <div className="flex-none px-1">Speaker</div>
            <div className="flex-1 mb-1 border-b border-dashed border-stone-300 height-18">
            </div>
            <div className="flex-none px-1">Shaeli Kersee</div>
          </div>
        </div>

        <div className="py-2">
          <div className="py-1">
            <div className="flex">
              <div className="flex-none px-1">Closing Hymn</div>
              <div className="flex-1 mb-1 border-b border-dashed border-stone-300 height-18">
              </div>
              <div className="flex-none px-1 text-right">1001</div>
            </div>
            <div className="text-center font-sm truncate zero-auto max-75">
              <div className="italic">Come Thou Fount of Every Blessing</div>
            </div>
          </div>

          <div className="flex py-1">
            <div className="flex-none px-1">Speaker</div>
            <div className="flex-1 mb-1 border-b border-dashed border-stone-300 height-18">
            </div>
            <div className="flex-none px-1">Dillon Grenko</div>
          </div>

          <div className="flex py-1">
            <div className="flex-none px-1">Benediction</div>
            <div className="flex-1 mb-1 border-b border-dashed border-stone-300 height-18">
            </div>
            <div className="flex-none px-1">Duane Gunn</div>
          </div>
        </div>
      </div>

      <hr className="h-px my-8 bg-gray-400 border-0" />
    </div>
  );
}

/**
 * TODO:
 * Scaffold out what a relational db schema would look like
 * with this data model (laying the groundwork for lcr.danaranchward.org)
 * - members table
 *  - will need UI tool to sync/upload from a report from actual LCR. CSV compat likely.
 *  - will need upload endpoint to be able to dedupe members and also create new entries in members table.
 *  - will need ability to add "flag" or "annotation" rules to disable showing on speakers upcoming, etc. With UI to list/edit.
 * - prayers table
 *  - each entry will have a simple record of date, member ID, and type "opening" or "closing"
 * - speakers table
 *  - each entry will have simple record of date and member ID
 */
