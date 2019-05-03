import React from 'react';
import image from '../images/expand-vertical-4.svg';
import Collapsible from './Collapsible';

class App extends React.Component {
  render() {
    return (
      <div>
        <header>
          <img src={image} alt="" />
          <h1>Collapsible Content</h1>
        </header>
        <div className="content">
          <div className="panel-group">
            <Collapsible title="Overview">
              What about scaling components to a global audience? horsehead
              offer, or work flows . Action item. Quick win peel the onion.
              Pushback usabiltiy, or blue money. Player-coach closing these
              latest prospects is like putting socks on an octopus, but
              drop-dead date pig in a python. Obviously. Please advise soonest.
              Cloud strategy reach out we need to start advertising on social
              media hard stop. Best practices close the loop for no scraps hit
              the floor, or put a record on and see who dances personal
              development. Shoot me an email. Helicopter view we need to dialog
              around your choice of work attire, so move the needle, or
              goalposts yet pushback. Re-inventing the wheel we're ahead of the
              curve on that one ultimate measure of success.
            </Collapsible>
            <Collapsible title="Features">
              Dog and pony show we need a recap by eod, cob or whatever comes
              first value prop for commitment to the cause and imagineer.
              Data-point open door policy idea shower time vampire can we take
              this offline. Diversify kpis.
            </Collapsible>
            <Collapsible title="Software">
              Hard stop shotgun approach viral engagement, but gain alignment
              drink from the firehose. Get all your ducks in a row not a hill to
              die on or time vampire bench mark. Innovation is hot right now
              win-win-win so we want to empower the team with the right tools
              and guidance to uplevel our craft and build better. Drop-dead date
              we want to see more charts, your work on this project has been
              really impactful old boys club, pig in a python, drive awareness
              to increase engagement. Quarterly sales are at an all-time low.
              Game-plan let's prioritize the low-hanging fruit, this vendor is
              incompetent for strategic fit, and what's our go to market
              strategy?, drive awareness to increase engagement nor closing
              these latest prospects is like putting socks on an octopus. In an
              ideal world new economy strategic high-level 30,000 ft view.
              Deliverables move the needle (let's not try to) boil the ocean
              (here/there/everywhere) we're ahead of the curve on that one so
              gain traction but on-brand but completeley fresh clear blue water.
              Cross sabers i am dead inside, run it up the flag pole. Tbrand
              terrorists sacred cow pipeline.
            </Collapsible>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
