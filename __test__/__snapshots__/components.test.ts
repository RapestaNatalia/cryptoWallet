import React from "react";
import { Logo } from "../../components/ui/Logo";
import { Fetching } from "../../components/ui/ActivityIndicator";
import { TabNavBar } from "../../components/ui/TabNavBar";
import renderer from "react-test-renderer";
import { PrimaryButton } from "../../components/ui/PrimaryButton";
import { HeaderLeft } from "../../components/ui/HeaderLeft";
import { CoinInfo } from "../../components/ui/CoinInfo";
describe("Snapshot tests", () => {
  it("Logo snapShot", () => {
    const tree = renderer.create(Logo()).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("Activity Indicator snapShot", () => {
    const tree = renderer
      .create(Fetching({ animating: true, color: "blue" }))
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("TabNavBar snapShot", () => {
    const tree = renderer
      .create(TabNavBar({ isFocus: true, name: "To Do" }))
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("PrimaryButton snapShot", () => {
    const tree = renderer
      .create(
        PrimaryButton({
          title: "Get Started",
          onPress: () => {},
          accessibilityHint: "Press this button to start session",
          accessibilityLabel: "This is the LogIn button",
        })
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("HeaderLeft snapShot", () => {
    const tree = renderer
      .create(HeaderLeft({ onPress: () => {}, name: "" }))
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("CoinInfo snapShot", () => {
    const item = {
      changePercent24Hr: "-4.8350931871279116",
      explorer: "https://explorer.binance.org/asset/RUNE-B1A",
      id: "thorchain",
      marketCapUsd: "1935142965.0384600300689446",
      maxSupply: "500000000.0000000000000000",
      name: "THORChain",
      priceUsd: "5.8518682447421885",
      rank: "65",
      supply: "330688061.3344559700000000",
      symbol: "RUNE",
      volumeUsd24Hr: "47598877.9465108057755086",
      vwap24Hr: "5.9481127113701395",
    };
    const tree = renderer
      .create(CoinInfo({ onPress: () => {}, item }))
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
