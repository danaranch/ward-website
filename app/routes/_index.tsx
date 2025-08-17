import type { MetaFunction } from "@netlify/remix-runtime";
import ActionButton from "~/components/ActionButton";
import LineItem from "~/components/LineItem";
import LineItemLeadership from "~/components/LineItemLeadership";
import LineItemBold from "~/components/LineItemBold";
import LightRays from "~/components/LightRays";

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
      <img
        src="/img/bible_films_christ_walking_disciples.jpeg"
        className="pb-4 m-auto"
        alt="jesus"
      />
      <img
        src="/img/modern-logo.png"
        className="m-auto w-3/4 md:w-1/2 xl:w-1/3"
        alt="church-logo"
      />
      <div key="title-credits" className="church-font text-center p-1 py-2">
        <p className="text-2xl">Dana Ranch Ward</p>
        <p className="text-3xl">Sacrament Meeting</p>
        <p className="text-2xl">August 3, 2025</p>
      </div>

      {/*
      TODO: Remove component from index when we get posters for foyer
      */}
      <div className="pt-4">
        <ActionButton
          link="https://zoom.us/j/98508434243"
          text="Join via broadcast"
        />
      </div>
      <hr className="h-px my-8 bg-gray-400 border-0" />

      <div id="services" className="mx-2">
        <LineItemLeadership left="Presiding" right="Bishop Shumway" />
        <LineItemLeadership left="Conducting" right="Bishop Shumway" />
        <LineItemLeadership left="Organist" right="Chris Cooley" />
        <LineItemLeadership left="Chorister" right="Julie Clement" />

        <div className="p-8 mt-4 rounded bg-sky-100">
          <div className="text-center">
            <em className="font-semibold text-lg">Announcements</em>
          </div>
          <ol className="list-decimal ml-5 sticky">
            <li className="pt-1">
              The Dana Ranch Ward is responsible for cleaning the church
              building from June to August.
            </li>
            <li className="pt-1">
              Please see the Order of Service's e-mail for Missionary Meal signups,
              or the backup signup to be passed around during second hour (online
              signup preferred).
            </li>
            <li className="pt-1">
              Bishop's Hang Out: Cereal Sunday. All priests and young women
              class 16-18 are invited to the Shumway's home on the third Sunday
              of each month from 7:00-8:30 pm.
            </li>
            <li className="pt-1">
              Mission and Life Skills Prep for all Juniors and Seniors is held
              every 2nd and 4th Sunday at 3pm in the Relief Society room.
            </li>
          </ol>
        </div>

        <LineItem
          left="Opening Hymn"
          middle="Improve the Shining Moments"
          right="226"
          link="https://www.churchofjesuschrist.org/media/music/songs/improve-the-shining-moments?lang=eng"
        />
        <LineItem left="Invocation" right="Chris Cooley" />

        <LineItemBold middle="Ward Business" />

        <LineItem
          left="Sacrament Hymn"
          middle="As Now We Take the Sacrament"
          right="169"
          link="https://www.churchofjesuschrist.org/media/music/songs/as-now-we-take-the-sacrament?lang=eng"
        />

        <LineItemBold middle="Administration of the Sacrament" />

        {/*
        <LineItemBold middle="Bearing of Testimonies" />
        */}

        <LineItem left="Speaker" right="Lundun Osborn" />
        <LineItem left="Speaker" right="Kim Huffaker" />

        <LineItem
          left="Intermediate Hymn"
          middle="Redeemer of Israel"
          right="6"
          link="https://www.churchofjesuschrist.org/media/music/songs/redeemer-of-israel?lang=eng"
        />

        <LineItem left="Speaker" right="Gary Hakes" />

        <LineItem
          left="Closing Hymn"
          middle="Where Can I Turn For Peace?"
          right="129"
          link="https://www.churchofjesuschrist.org/media/music/songs/where-can-i-turn-for-peace?lang=eng"
        />

        <LineItem left="Benediction" right="Helga Goff" />
      </div>

      {/* TODO: Abstract into footer component */}
      <div className="h-20 flex items-center justify-between mt-4 bg-neutral-100">
        <div className="h-20 flex justify-center item-start">
          <div className="bg-[#0ea5e9] p-2 h-full">
            <img
              className="h-full"
              src="/img/christus.png"
              alt="Christ"
              height="full"
            />
          </div>
          <span className="h-full relative" style={{ left: -1, top: 0 }}>
            <LightRays color="#0ea5e9" />
          </span>
        </div>
        <div className="mr-6 text-stone-500 text-right font-extrabold">
          <div>Dana Ranch Ward</div>
          <div>Mesa Kimball Stake</div>
        </div>
      </div>
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
