import { NextPage } from "next";
import * as Styles from "./styles";

export interface CurrentImageProps {
  lastImage: {
    url: string;
    title: string;
    description: string;
    date: Date;
  };
}
const CurrentImage: NextPage<CurrentImageProps> = ({ lastImage }) => {
  return (
    <Styles.Container>
      <Styles.Informations>
        <Styles.Title>{lastImage?.title}</Styles.Title>
        <Styles.Description>{lastImage?.description}</Styles.Description>
        <Styles.Date>{lastImage?.date}</Styles.Date>
      </Styles.Informations>
      <Styles.Card>
        {!lastImage?.url.includes("youtube") ? (
          <Styles.CardImage src={lastImage?.url} />
        ) : (
          <Styles.videoEmbed type={"video/webm"} src={lastImage?.url} />
        )}
      </Styles.Card>
    </Styles.Container>
  );
};
export default CurrentImage;
