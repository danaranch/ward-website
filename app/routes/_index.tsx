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
        <p className="text-2xl">October 26, 2025</p>
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
        <LineItemLeadership left="Organist" right="Joe Capps" />
        <LineItemLeadership left="Chorister" right="Julie Clement" />

        <div className="p-8 mt-4 rounded bg-sky-100">
          <div className="text-center">
            <em className="font-semibold text-lg">Announcements</em>
          </div>
          <ol className="list-decimal ml-5 sticky">
            <li className="pt-1">
              Tithing Declaration signup is open. Please see the e-mail for the link.
              If you are not getting the Order of Service e-mail, please contact
              Nicholas Wallace.
            </li>
            <li className="pt-1">
              The Dana Ranch Ward will be cleaning the temple on October 31. <a href="https://www.signupgenius.com/go/10C0545A8AE23A2FCCF8-59728311-october">https://www.signupgenius.com/go/10C0545A8AE23A2FCCF8-59728311-october</a>.
            </li>
            <li className="pt-1">
              Please see the Order of Services e-mail for Missionary Meal signups,
              or the backup signup to be passed around during second hour (<a href="https://www.signupgenius.com/go/10C0F4FADAE2DA7F5CE9-57457318-missionary#/">https://www.signupgenius.com/go/10C0F4FADAE2DA7F5CE9-57457318-missionary#/</a>
              ).
            </li>
            <li className="pt-1">
              Choir Practice will be held from 11:15 AM to 12:00 PM on Sundays in Rooms
              20 and 21 (between the Library and Bishop's office).
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
          middle="Battle Hymn of the Republic"
          right="60"
          link="https://www.churchofjesuschrist.org/media/music/songs/battle-hymn-of-the-republic?lang=eng"
        />
        <LineItem left="Invocation" right="John Flaherty" />

        <LineItemBold middle="Ward Business" />

        <LineItem
          left="Sacrament Hymn"
          middle="Jesus of Nazareth, Savior and King"
          right="181"
          link="https://www.churchofjesuschrist.org/media/music/songs/jesus-of-nazareth-savior-and-king?lang=eng"
        />

        <LineItemBold middle="Administration of the Sacrament" />

        {/*
        <LineItemBold middle="Bearing of Testimonies" />
        */}

        <LineItem left="Speaker" right="Belle Reynolds" />
        <LineItem left="Speaker" right="Bob Bradshaw" />

        <LineItem
          left="Special Musical Number"
          middle="Brightly Beams our Father's Mercy"
          right="Owen and Joe Capps"
        />

        <LineItem left="Speaker" right="Owen Capps" />

        <LineItem
          left="Closing Hymn"
          middle="I'll Go Where You Want Me to Go"
          right="270"
          link="https://www.churchofjesuschrist.org/media/music/songs/ill-go-where-you-want-me-to-go?lang=eng"
        />

        <LineItem left="Benediction" right="Shaeli Kersee" />
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
