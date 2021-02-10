import { Fragment } from "react";

export default function HomeHeroComponent() {
  return (
    <Fragment>
      <section
        id="41"
        data-name="All Access Unlocked"
        class="pb-Container all-access-unlocked mv-section__gutter relative"
      >
        <div
          target="_self"
          class="mv-container relative z-20 pt-16 lg:pt-32 grid gap-6 md:gap-8 lg:gap-12 grid-cols-1 items-center"
        >
          <div target="_self" id="" class="w-full lg:w-3/4 mx-auto text-center">
            <div class="pb-markdown mv-type--title4">
              <h2>Now get all of Mindvalley unlocked</h2>
            </div>
            <div class="pb-markdown mv-type--titlebold3 mt-1 lg:mt-2">
              <p>
                Less than <span>$2/Day</span>
              </p>
            </div>
          </div>
          <div class="">
            <img
              data-src="https://storyblok-cdn.mindvalley.com/f/60579/1594x883/c981ac783d/mvcom_hp_aa_devices.png?quality=75&amp;dpr=1&amp;width=1128"
              alt="Mindvalley All Access on Apple TV, showcasing Mindvalley learning platform on a laptop screen, Omvana on a tablet screen, Mindvalley Connections on a mobile phone"
              class="cld-responsive rounded w-full lazyloaded"
              src="https://storyblok-cdn.mindvalley.com/f/60579/1594x883/c981ac783d/mvcom_hp_aa_devices.png?quality=75&amp;dpr=1&amp;width=1128"
            />
          </div>
          <div target="_self" id="" class="w-full lg:w-3/4 mx-auto text-center">
            <div class="pb-markdown mv-type--titlebold5 text-center">
              <h6>Mindvalley Membership</h6>
            </div>
            <div class="pb-markdown mv-type--body mt-2 md:mt-6 lg:text-center">
              <p>
                Mindvalley Membership gives you instant access to all our
                programs. It also includes access to our private community and
                connections app.
              </p>
              <p>
                Plus Live workshops and guest speakers, mentoring classes for
                unique topics and more.{" "}
              </p>
            </div>
            <a
              href="/membership?itm_source=mv.com&amp;itm_campaign=qaap_evergreen&amp;otag=mv.com_qaap"
              data-test="webinars-button"
              target="_self"
              rel="noreferrer"
              class="base-button mt-4 lg:mt-6 mv-btn--primary"
            >
              Read More
            </a>
          </div>
        </div>
        <div class="mv-hero__wrapper">
          <div
            data-bgset="//a.storyblok.com/f/60579/2880x1360/defb1ea7b9/mvcom_hp_aa_bg.jpg 1440w, //a.storyblok.com/f/60579/2880x1360/defb1ea7b9/mvcom_hp_aa_bg.jpg 2880w"
            class="mv-hero__background bg-contain bg-top lazyloaded"
          >
            <picture>
              <source
                sizes="1440px"
                data-srcset="//a.storyblok.com/f/60579/2880x1360/defb1ea7b9/mvcom_hp_aa_bg.jpg 1440w, //a.storyblok.com/f/60579/2880x1360/defb1ea7b9/mvcom_hp_aa_bg.jpg 2880w"
                srcset="//a.storyblok.com/f/60579/2880x1360/defb1ea7b9/mvcom_hp_aa_bg.jpg 1440w, //a.storyblok.com/f/60579/2880x1360/defb1ea7b9/mvcom_hp_aa_bg.jpg 2880w"
              />
              <img
                alt=""
                class=" lazyloaded"
                data-sizes="1440px"
                sizes="1440px"
              />
            </picture>
          </div>
        </div>
      </section>
    </Fragment>
  );
}
