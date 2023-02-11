import { View, Text, Image, TouchableWithoutFeedback } from "react-native";
import numFormatter from "../utils/nFormatter";

const RepositoryItem = ({ item, style }) => {
  return (
    <View style={style.container} key={item.id}>
      <View style={style.header}>
        <Image style={style.img} source={{ uri: `${item.ownerAvatarUrl}` }} />
        <View style={style.headerInfo}>
          <Text style={[style.headerText, style.name]}>{item.fullName}</Text>
          <Text style={[style.headerText, style.description]}>
            {item.description}
          </Text>
          <View
            style={[
              style.languageLabel,
              { borderRadius: 5, alignSelf: "baseline" },
            ]}
          >
            <Text style={style.headerText}>{item.language}</Text>
          </View>
        </View>
      </View>
      <View style={style.body}>
        <View style={style.bodyInfo}>
          <Text style={style.statics}>
            {numFormatter(item.stargazersCount)}
          </Text>
          <Text style={style.text}>Star</Text>
        </View>
        <View style={style.bodyInfo}>
          <Text style={style.statics}>{numFormatter(item.forksCount)}</Text>
          <Text style={style.text}>Forks</Text>
        </View>
        <View style={style.bodyInfo}>
          <Text style={style.statics}>{item.reviewCount}</Text>
          <Text style={style.text}>Review</Text>
        </View>
        <View style={style.bodyInfo}>
          <Text style={style.statics}>{item.ratingAverage}</Text>
          <Text style={style.text}>Rating</Text>
        </View>
      </View>
    </View>
  );
};

export default RepositoryItem;
