// import React, { useState, useEffect, useRef } from "react";
// import toast from "react-hot-toast";
// import { useNavigate } from "react-router-dom";
// // import { useLoadingSpinner } from "components/LoadingSpinner";
// // import { FileUpload } from "components/FileUpload";
// // import { uploadFile } from "services/firebase";
// // import { StoredFile, StoredFileState } from "data/common";

// export enum EditEntryType {
//   Text = "Text",
//   TextList = "TextList",
//   DoubleTextList = "DoubleTextList",
//   TextArea = "TextArea",
//   File = "File",
//   Address = "Address",
//   Photo = "Photo",
//   ProfilePhoto = "ProfilePhoto",
//   FilePhoto = "FilePhoto",
//   Radio = "Radio",
//   Checkbox = "Checkbox",
//   Article = "Article",
//   Date = "Date",
//   Select = "Select",
//   Showcase = "Showcase",
// }

// export enum ValidationType {
//   Email = "Email",
//   PhoneNumber = "PhoneNumber",
//   UserName = "UserName",
//   CheckboxChecked = "CheckboxChecked",
//   RequiredField = "RequiredField",
//   TextLengthBelow30 = "TextLengthBelow30",
//   TextLengthBelow50 = "TextLengthBelow50",
//   TextLengthBelow100 = "TextLengthBelow100",
//   TextLengthBelow200 = "TextLengthBelow200",
//   TextLengthBelow300 = "TextLengthBelow300",
//   TextLengthBelow400 = "TextLengthBelow400",
//   Number = "Number",
//   Price = "Price",
// }

// export interface ExtraParam {
//   isInstagramShowcase: boolean;
//   maxPhotos: number;
// }

// export interface EditEntry {
//   attribute: string;
//   attributeName: String;
//   type: EditEntryType;
//   isRequired: Boolean;
//   validations: [ValidationType];
//   extraParam: ExtraParam;
//   options: any;
//   info: any;
//   subName: any;
//   condition: null;
//   characterCount: any;
//   button: any;
//   subTitle: any;
// }

// export interface EditFormProps<T extends Entity> {
//   id: String;
//   title: String;
//   description: String;
//   editEntries: EditEntry[];
//   entityObj: any;
//   onSubmitSuccess: Function;
//   buttonText: any;
// }

export class Showcase {
  profile_photo_url?: string;
  handle?: string;
  url?: string;
  title?: string;

  constructor({
    profile_photo_url = "",
    handle = "",
    url = "",
    title = "",
  }: {
    profile_photo_url?: string;
    handle?: string;
    url?: string;
    title?: string;
  }) {
    // Assigning each property using the destructured parameters
    this.profile_photo_url = profile_photo_url;
    this.handle = handle;
    this.url = url;
    this.title = title;
  }

  // Convert the Showcase instance to a plain object
  toPlainObject() {
    return {
      profile_photo_url: this.profile_photo_url,
      handle: this.handle,
      url: this.url,
      title: this.title,
    };
  }
}

export class Address {
  street_address?: string;
  city?: string;
  province?: string;
  country?: string;

  constructor({
    street_address = "",
    city = "",
    province = "",
    country = "",
  }: {
    street_address?: string;
    city?: string;
    province?: string;
    country?: string;
  }) {
    this.street_address = street_address;
    this.city = city;
    this.province = province;
    this.country = country;
  }

  // Convert to a plain object
  toPlainObject() {
    return {
      street_address: this.street_address,
      city: this.city,
      province: this.province,
      country: this.country,
    };
  }
}

export interface Entity {
  id: string;
  // Add other properties of entityObj here
}

export interface EditEntry {
  subName?: string;
  info?: string;
  // options: any;
  characterCount?: number;
  button?: React.JSX.Element;
  subTitle?: string;
  condition?: null;
  attribute: string;
  attributeName: string;
  type: EditEntryType;
  isRequired?: boolean;
  validations?: ValidationType[];
  extraParam?: ExtraParam;
}

// export interface EditFormProps<T extends Entity> {
//   buttonText: string;
//   title: string;
//   description: string;
//   editEntries: EditEntry[];
//   entityObj: T;
//   // onSubmitSuccess: Function;
// }

export interface EditFormProps {
  buttonText: string;
  title: string;
  description: string;
  editEntries: EditEntry[];
  entityObj: any;
  // onSubmitSuccess: Function;
}

export enum EditEntryType {
  Text = "Text",
  TextList = "TextList",
  DoubleTextList = "DoubleTextList",
  TextArea = "TextArea",
  File = "File",
  Address = "Address",
  Photo = "Photo",
  ProfilePhoto = "ProfilePhoto",
  FilePhoto = "FilePhoto",
  Radio = "Radio",
  Checkbox = "Checkbox",
  Article = "Article",
  Date = "Date",
  Select = "Select",
  Showcase = "Showcase",
}

export enum ValidationType {
  Email = "Email",
  PhoneNumber = "PhoneNumber",
  UserName = "UserName",
  CheckboxChecked = "CheckboxChecked",
  RequiredField = "RequiredField",
  TextLengthBelow30 = "TextLengthBelow30",
  TextLengthBelow50 = "TextLengthBelow50",
  TextLengthBelow100 = "TextLengthBelow100",
  TextLengthBelow200 = "TextLengthBelow200",
  TextLengthBelow300 = "TextLengthBelow300",
  TextLengthBelow400 = "TextLengthBelow400",
  Number = "Number",
  Price = "Price",
}

export interface ExtraParam {
  isInstagramShowcase: boolean;
  maxPhotos: number;
}
