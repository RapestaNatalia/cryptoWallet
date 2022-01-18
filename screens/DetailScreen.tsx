import React, { useState, useEffect, useCallback } from "react";
import { StyleSheet, Text, View, Button, Alert } from "react-native";
import axios from "axios";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParams } from "../navigation/Navigator";
import { Item } from "../interfaces/interfaces";
import { COINCAP_URL } from "../config/environment";
import { Fetching } from "../components/ui/ActivityIndicator";
import { useNavigation } from "@react-navigation/native";
import { PrimaryButton } from "../components/ui/PrimaryButton";
import { CoinInfo } from "../components/ui/CoinInfo";
import { formatUSA } from "../config/utils";
import { theme } from "../style/theme";

/**
 * ToDo: Feed the list using fetching data from a RESTful API
 *
 * API: COINCAP API 2.0
 * API Docs: https://api.coincap.io/v2/assets/{id}
 * API Example: https://docs.coincap.io/#f8869879-171f-4240-adfd-dd2947506adc
 *
 * 💯 Using axios great plus
 * 💯 Handle loading and error scenarios, always
 */

interface Props extends StackScreenProps<RootStackParams, "Detail"> {}

export default function ListScreen({ route }: Props) {
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<Item>();
  const navigation = useNavigation();

  //const data = mockData.data;

  const item: Item | undefined = data;
  let cancel = false;
  const getDetail = useCallback(async () => {
    const { id } = route.params.item;
    setLoading(true);
    axios
      .get(`${COINCAP_URL}/${id}`)
      .then(function (response) {
        if (cancel) return;
        setData(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        Alert.alert("Something wron!", "Error procesing request", [
          { text: "Okay" },
        ]);
      });
  }, []);
  useEffect(() => {
    getDetail();
    return () => {
      cancel = true;
    };
  }, []);

  return (
    <View
      style={styles.container}
      accessibilityLabel="Detail for specific coin."
      accessibilityHint="Here you could find a complete detail about the current state of this criptocurrency."
    >
      {item ? (
        <View style={styles.itemContainer}>
          <View style={styles.infoContainer}>
            <CoinInfo styleItem={styles.coinInfo} item={item} />
            <View style={styles.bottomContainer}>
              <Text style={styles.text}>
                Supply {formatUSA((+item.supply).toFixed(2))}
              </Text>
              <Text style={styles.text}>
                Max Supply{" "}
                {item.maxSupply && formatUSA((+item.maxSupply).toFixed(2))}
              </Text>
              <View>
                <Text style={styles.text}>
                  Market Cap $ {formatUSA((+item.marketCapUsd).toFixed(2))}
                  <Text style={styles.usd}> USD</Text>
                </Text>
              </View>
            </View>
          </View>
          <PrimaryButton
            accessibilityHint="Press here to enter into your wallet."
            accessibilityLabel="My wallet button."
            title="My Wallet"
            onPress={() => navigation.navigate("Wallet")}
          />
        </View>
      ) : (
        <Fetching animating={loading} color={theme.colors.lightSkyBlue} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.platinium,
    alignItems: "center",
    justifyContent: "center",
    padding: 30,
  },
  itemContainer: {
    width: "100%",
  },
  infoContainer: {
    backgroundColor: theme.colors.white,
    width: "100%",
    borderRadius: 8,
  },
  coinInfo: {
    backgroundColor: theme.colors.white,
    height: 70,
  },
  text: {
    color: theme.colors.zinnwalditeBrown,
    fontSize: 16,
    marginVertical: 5,
  },
  usd: {
    color: theme.colors.auroMetalSaurus,
    fontSize: 14,
  },
  bottomContainer: {
    padding: 20,
  },
});

const mockData = {
  data: {
    id: "bitcoin",
    rank: "1",
    symbol: "BTC",
    name: "Bitcoin",
    supply: "17193925.0000000000000000",
    maxSupply: "21000000.0000000000000000",
    marketCapUsd: "119179791817.6740161068269075",
    volumeUsd24Hr: "2928356777.6066665425687196",
    priceUsd: "6931.5058555666618359",
    changePercent24Hr: "-0.8101417214350335",
    vwap24Hr: "7175.0663247679233209",
    explorer: "algo",
  },
};
