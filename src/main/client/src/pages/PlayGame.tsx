import Tabs, { Tab, TabList, TabPanel } from "@atlaskit/tabs";
import { CurrentRound } from "../components/CurrentRound";
import { GameHistory } from "../components/GameHistory";
import { GameInfo } from "../components/GameInfo";
import { EditSettings } from "../components/EditSettings";

export default function PlayGame() {
  return (
    <div className="-mt-4 px-4">
      <Tabs id="default">
        <TabList>
          <Tab>Current Round</Tab>
          <Tab>Game History</Tab>
          <Tab>Players & Game Info</Tab>
          <Tab>Settings</Tab>
        </TabList>
        <TabPanel>
          <CurrentRound />
        </TabPanel>
        <TabPanel>
          <GameHistory />
        </TabPanel>
        <TabPanel>
          <GameInfo />
        </TabPanel>
        <TabPanel>
          <EditSettings />
        </TabPanel>
      </Tabs>
    </div>
  );
}
