import React from "react";
import {
  Body,
  BtnLinkText,
  CardTitle,
  DownloadLink,
  ExtraSmallText,
  FooterMenuText,
  HighLightNumericText,
  HighLightNumericText2,
  TestimonialNumericText3,
  TitleTextLight,
  NavBarText,
  PageTitle,
  PlaceHolderText,
  SectionTitle,
  SideBarNavText,
  SmallHeading,
  SmallText,
  SubTitle,
  TagText,
} from "./Text";
interface TextDocsProps extends React.HTMLAttributes<HTMLSpanElement> {
  type:
    | "PageTitle"
    | "SectionTitle_caps"
    | "SectionTitle_normal"
    | "SubTitle"
    | "Body"
    | "Body_bold"
    | "CardTitle_large"
    | "CardTitle_small"
    | "HighLightNumericText"
    | "HighLightNumericText2"
    | "TestimonialNumericText3"
    | "TitleTextLight"
    | "DownloadLink"
    | "SmallHeading"
    | "SideBarNavText"
    | "NavBarText"
    | "TagText"
    | "BtnLinkText"
    | "FooterMenu"
    | "PlaceHolder"
    | "Small"
    | "ExtraSmall";
  children: string;
}

const TextDocs: React.FC<TextDocsProps> = ({ type, children }) => {
  return (
    <>
      {type === "PageTitle" ? (
        <PageTitle>{children}</PageTitle>
      ) : type === "SectionTitle_caps" ? (
        <SectionTitle caps>{children}</SectionTitle>
      ) : type === "SectionTitle_normal" ? (
        <SectionTitle normal>{children}</SectionTitle>
      ) : type === "SubTitle" ? (
        <SubTitle>{children} </SubTitle>
      ) : type === "Body" ? (
        <Body>{children}</Body>
      ) : type === "Body_bold" ? (
        <Body bold>{children}</Body>
      ) : type === "CardTitle_large" ? (
        <CardTitle CardType="large">{children}</CardTitle>
      ) : type === "CardTitle_small" ? (
        <CardTitle CardType="small">{children}</CardTitle>
      ) : type === "HighLightNumericText" ? (
        <HighLightNumericText>{children}</HighLightNumericText>
      ) : type === "HighLightNumericText2" ? (
        <HighLightNumericText2>{children}</HighLightNumericText2>
      ) : type === "TestimonialNumericText3" ? (
        <TestimonialNumericText3>{children}</TestimonialNumericText3>
      ) : type === "TitleTextLight" ? (
        <TitleTextLight>{children}</TitleTextLight>
      ) : type === "DownloadLink" ? (
        <DownloadLink position="left" label={children} />
      ) : type === "SmallHeading" ? (
        <SmallHeading>{children}</SmallHeading>
      ) : type === "SideBarNavText" ? (
        <SideBarNavText>{children}</SideBarNavText>
      ) : type === "NavBarText" ? (
        <NavBarText>{children}</NavBarText>
      ) : type === "TagText" ? (
        <TagText>{children}</TagText>
      ) : type === "BtnLinkText" ? (
        <BtnLinkText>{children}</BtnLinkText>
      ) : type === "Small" ? (
        <SmallText>{children}</SmallText>
      ) : type === "ExtraSmall" ? (
        <ExtraSmallText>{children}</ExtraSmallText>
      ) : type === "FooterMenu" ? (
        <FooterMenuText>{children}</FooterMenuText>
      ) : type === "PlaceHolder" ? (
        <PlaceHolderText>{children}</PlaceHolderText>
      ) : null}
    </>
  );
};

export { TextDocs };
