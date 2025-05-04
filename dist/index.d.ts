import { HTMLAttributes, FC, SVGProps } from 'react';
import * as react_jsx_runtime from 'react/jsx-runtime';

type IconsName = "AcceptedReceipt" | "Actions" | "Add" | "AddCircleFill" | "AddCircleOutline" | "AddColumn" | "AddDocument" | "AddDocumentPocket" | "AddFolder" | "AddForms" | "AddGroup" | "AddRow" | "AddSquareFill" | "AddSquareOutline" | "AddUser" | "AllowRemote" | "Archive" | "ArrowDownBig" | "ArrowDownFill" | "ArrowDownSmall" | "ArrowLeftBig" | "ArrowLeftFill" | "ArrowLeftSmall" | "ArrowRightBig" | "ArrowRightFill" | "ArrowRightSmall" | "ArrowUpBig" | "ArrowUpFill" | "ArrowUpSmall" | "AttachFile" | "Attachment" | "AttachmentSmall" | "BackSingleColor" | "BasicInfo" | "BellFill" | "BellOutline" | "Blur" | "Calculator" | "CalculatorMinimalistic" | "Calendar" | "Call" | "Calling" | "CameraRotate" | "CameraRotateFill" | "CancelMessage" | "CancelRemote" | "Captcha" | "Card" | "Card2" | "CardReceive" | "CardSearch" | "CardSend" | "CardTransfer" | "ChangeLogo" | "ChangeRemote" | "Chat" | "Check" | "CheckCircleFill" | "CheckCircleOutline" | "Checklist" | "CheckSquareFill" | "CheckSquareOutline" | "CircleFill" | "CircleOutline" | "ClockCircle" | "ClockDark" | "ClockSquare" | "Close" | "CloseCircleFill" | "CloseCircleOutline" | "CloseSquareFill" | "CloseSquareOutline" | "CloseWindows" | "Coding" | "Companies" | "ControlRemote" | "Copy" | "CopyRow" | "Dashboard" | "DateTime" | "Delete" | "DeleteFill" | "DeleteRow" | "DeliveryMessage" | "Description" | "DescriptionFill" | "DescriptionOutline" | "DeviceID" | "Direction" | "DollarCircle" | "DollarCircleCancel" | "DollarCircleChart" | "DollarCircleExpensive" | "DollarCircleIncome" | "DollarCircleTransfer" | "DollarSquare" | "DollarSquareCancel" | "DollarSquareChart" | "DollarSquareExpensive" | "DollarSquareIncome" | "DollarSquareTransfer" | "DoubleAltArrowDown" | "DoubleAltArrowLeft" | "DoubleAltArrowRight" | "DoubleAltArrowUp" | "Down" | "Download" | "DownloadFill" | "DownloadVideo" | "DownloadVoiceBox" | "EditFill" | "EditOutline" | "EditPen" | "EditProfile" | "Email" | "EmptyFolder" | "EndDocument" | "EndDocumentFill" | "Enter" | "EnterFill" | "Entity" | "Exit" | "ExportDOC" | "ExportJPG" | "ExportPDF" | "ExportXLS" | "ExportZIP" | "EyeClosed" | "FailedMessage" | "FavoriteDeselect" | "FavoriteSelected" | "Filter" | "FilterFill" | "FilterTable" | "FingerPrint" | "FingerprintCheckIn" | "FingerprintCheckout" | "FinishTransaction" | "FolderWindows" | "ForwardMessage" | "ForwardSingleColor" | "FullScreen" | "FullScreenExit" | "GalleryDownload" | "GroupAction" | "GroupChat" | "HalfArrowLeft" | "HalfArrowRight" | "HandMoney" | "History" | "Home" | "Image" | "Incognito" | "IncomeCall" | "Info" | "InfoCircleFill" | "InfoCircleOutline" | "InfoSquareFill" | "InfoSquareOutline" | "Left" | "Levels" | "Library" | "LikeMoney" | "Lock" | "Login" | "LogOut" | "Management" | "MaximizeSquare" | "MaximumWindows" | "Melody" | "MelodyBox" | "Menu" | "MenuHamburger" | "MenuHorizontalDots" | "MenuVerticalDots" | "MenuVerticalDotsFill" | "Microphone" | "MicrophoneMute" | "MinimizeSquare" | "MinimizeWindows" | "MissCall" | "MoneyBag" | "Monitor" | "Moon" | "Muted" | "NextDocument" | "OutgoingCall" | "PassCode" | "Password" | "PauseVoiceBox" | "Payable" | "PaymentOrder" | "Pen" | "PettyCash" | "Photo" | "PhotoOutline" | "Picture" | "Pin" | "PinCircle" | "PinList" | "PlayVoiceBox" | "Popup" | "PresetFilters" | "PreviousDocument" | "Printer" | "PrinterFill" | "QuestionCircle" | "Receipt" | "ReceiptEdit" | "Receivable" | "RecordVideo" | "Reject" | "RejectCircleFill" | "RejectCircleOutline" | "RejectedReceipt" | "RejectedReceiptOutline" | "RejectFill" | "RejectSquareFill" | "RejectSquareOutline" | "RemoteAssist" | "RemoveAdmin" | "RemoveUser" | "ReplayMessage" | "Report" | "ReportCreator" | "Request" | "ResendMessage" | "Restart" | "Right" | "Roles" | "Save" | "Schema" | "Search" | "SearchSmall" | "SecretCall" | "SecretFile" | "SecretFileDownload" | "SecretImage" | "SecretImageDownload" | "SecretLocation" | "SecretLocationDownload" | "SecretMassage" | "SecretMelody" | "SecretMelodyDownload" | "SecretVideo" | "SecretVoice" | "SecretVoiceDownload" | "Send" | "SendMessage" | "SetAdmin" | "SetFilter" | "Setting" | "Share" | "ShareOutline" | "ShareScreen" | "SmallCamera" | "SortHorizontal" | "SpeakerOff" | "SquareFill" | "SquareOutline" | "StarInputTitle" | "Status" | "StopVoiceBox" | "Sun" | "Table" | "TableEdit" | "TakePhoto" | "Tools" | "TranslateFile" | "Unarchive" | "Unmute" | "Unpin" | "Up" | "Upload" | "UploadFill" | "UploadVoiceBox" | "User" | "UserSetting" | "UserSettingFill" | "Video" | "VideoCallOff" | "VideoCallOn" | "ViewFill" | "ViewOutline" | "ViewReceipt" | "Voice" | "Warning" | "WarningCircleFill" | "WarningCircleOutline" | "WarningMessage" | "WarningSquareFill" | "WarningSquareOutline";

interface IconsProps extends HTMLAttributes<HTMLSpanElement> {
    name: IconsName;
    size?: number;
    color?: string;
}
declare const Icons: FC<IconsProps>;

interface SVGRProps$4z {
    title?: string;
    titleId?: string;
}
declare const SvgAcceptedReceipt: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$4z) => react_jsx_runtime.JSX.Element;

interface SVGRProps$4y {
    title?: string;
    titleId?: string;
}
declare const SvgActions: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$4y) => react_jsx_runtime.JSX.Element;

interface SVGRProps$4x {
    title?: string;
    titleId?: string;
}
declare const SvgAdd: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$4x) => react_jsx_runtime.JSX.Element;

interface SVGRProps$4w {
    title?: string;
    titleId?: string;
}
declare const SvgAddCircleFill: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$4w) => react_jsx_runtime.JSX.Element;

interface SVGRProps$4v {
    title?: string;
    titleId?: string;
}
declare const SvgAddCircleOutline: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$4v) => react_jsx_runtime.JSX.Element;

interface SVGRProps$4u {
    title?: string;
    titleId?: string;
}
declare const SvgAddColumn: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$4u) => react_jsx_runtime.JSX.Element;

interface SVGRProps$4t {
    title?: string;
    titleId?: string;
}
declare const SvgAddDocument: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$4t) => react_jsx_runtime.JSX.Element;

interface SVGRProps$4s {
    title?: string;
    titleId?: string;
}
declare const SvgAddDocumentPocket: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$4s) => react_jsx_runtime.JSX.Element;

interface SVGRProps$4r {
    title?: string;
    titleId?: string;
}
declare const SvgAddFolder: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$4r) => react_jsx_runtime.JSX.Element;

interface SVGRProps$4q {
    title?: string;
    titleId?: string;
}
declare const SvgAddForms: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$4q) => react_jsx_runtime.JSX.Element;

interface SVGRProps$4p {
    title?: string;
    titleId?: string;
}
declare const SvgAddGroup: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$4p) => react_jsx_runtime.JSX.Element;

interface SVGRProps$4o {
    title?: string;
    titleId?: string;
}
declare const SvgAddRow: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$4o) => react_jsx_runtime.JSX.Element;

interface SVGRProps$4n {
    title?: string;
    titleId?: string;
}
declare const SvgAddSquareFill: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$4n) => react_jsx_runtime.JSX.Element;

interface SVGRProps$4m {
    title?: string;
    titleId?: string;
}
declare const SvgAddSquareOutline: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$4m) => react_jsx_runtime.JSX.Element;

interface SVGRProps$4l {
    title?: string;
    titleId?: string;
}
declare const SvgAddUser: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$4l) => react_jsx_runtime.JSX.Element;

interface SVGRProps$4k {
    title?: string;
    titleId?: string;
}
declare const SvgAllowRemote: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$4k) => react_jsx_runtime.JSX.Element;

interface SVGRProps$4j {
    title?: string;
    titleId?: string;
}
declare const SvgArchive: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$4j) => react_jsx_runtime.JSX.Element;

interface SVGRProps$4i {
    title?: string;
    titleId?: string;
}
declare const SvgArrowDownBig: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$4i) => react_jsx_runtime.JSX.Element;

interface SVGRProps$4h {
    title?: string;
    titleId?: string;
}
declare const SvgArrowDownFill: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$4h) => react_jsx_runtime.JSX.Element;

interface SVGRProps$4g {
    title?: string;
    titleId?: string;
}
declare const SvgArrowDownSmall: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$4g) => react_jsx_runtime.JSX.Element;

interface SVGRProps$4f {
    title?: string;
    titleId?: string;
}
declare const SvgArrowLeftBig: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$4f) => react_jsx_runtime.JSX.Element;

interface SVGRProps$4e {
    title?: string;
    titleId?: string;
}
declare const SvgArrowLeftFill: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$4e) => react_jsx_runtime.JSX.Element;

interface SVGRProps$4d {
    title?: string;
    titleId?: string;
}
declare const SvgArrowLeftSmall: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$4d) => react_jsx_runtime.JSX.Element;

interface SVGRProps$4c {
    title?: string;
    titleId?: string;
}
declare const SvgArrowRightBig: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$4c) => react_jsx_runtime.JSX.Element;

interface SVGRProps$4b {
    title?: string;
    titleId?: string;
}
declare const SvgArrowRightFill: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$4b) => react_jsx_runtime.JSX.Element;

interface SVGRProps$4a {
    title?: string;
    titleId?: string;
}
declare const SvgArrowRightSmall: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$4a) => react_jsx_runtime.JSX.Element;

interface SVGRProps$49 {
    title?: string;
    titleId?: string;
}
declare const SvgArrowUpBig: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$49) => react_jsx_runtime.JSX.Element;

interface SVGRProps$48 {
    title?: string;
    titleId?: string;
}
declare const SvgArrowUpFill: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$48) => react_jsx_runtime.JSX.Element;

interface SVGRProps$47 {
    title?: string;
    titleId?: string;
}
declare const SvgArrowUpSmall: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$47) => react_jsx_runtime.JSX.Element;

interface SVGRProps$46 {
    title?: string;
    titleId?: string;
}
declare const SvgAttachFile: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$46) => react_jsx_runtime.JSX.Element;

interface SVGRProps$45 {
    title?: string;
    titleId?: string;
}
declare const SvgAttachment: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$45) => react_jsx_runtime.JSX.Element;

interface SVGRProps$44 {
    title?: string;
    titleId?: string;
}
declare const SvgAttachmentSmall: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$44) => react_jsx_runtime.JSX.Element;

interface SVGRProps$43 {
    title?: string;
    titleId?: string;
}
declare const SvgBackSingleColor: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$43) => react_jsx_runtime.JSX.Element;

interface SVGRProps$42 {
    title?: string;
    titleId?: string;
}
declare const SvgBasicInfo: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$42) => react_jsx_runtime.JSX.Element;

interface SVGRProps$41 {
    title?: string;
    titleId?: string;
}
declare const SvgBellFill: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$41) => react_jsx_runtime.JSX.Element;

interface SVGRProps$40 {
    title?: string;
    titleId?: string;
}
declare const SvgBellOutline: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$40) => react_jsx_runtime.JSX.Element;

interface SVGRProps$3$ {
    title?: string;
    titleId?: string;
}
declare const SvgBlur: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$3$) => react_jsx_runtime.JSX.Element;

interface SVGRProps$3_ {
    title?: string;
    titleId?: string;
}
declare const SvgCalculator: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$3_) => react_jsx_runtime.JSX.Element;

interface SVGRProps$3Z {
    title?: string;
    titleId?: string;
}
declare const SvgCalculatorMinimalistic: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$3Z) => react_jsx_runtime.JSX.Element;

interface SVGRProps$3Y {
    title?: string;
    titleId?: string;
}
declare const SvgCalendar: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$3Y) => react_jsx_runtime.JSX.Element;

interface SVGRProps$3X {
    title?: string;
    titleId?: string;
}
declare const SvgCall: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$3X) => react_jsx_runtime.JSX.Element;

interface SVGRProps$3W {
    title?: string;
    titleId?: string;
}
declare const SvgCalling: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$3W) => react_jsx_runtime.JSX.Element;

interface SVGRProps$3V {
    title?: string;
    titleId?: string;
}
declare const SvgCameraRotate: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$3V) => react_jsx_runtime.JSX.Element;

interface SVGRProps$3U {
    title?: string;
    titleId?: string;
}
declare const SvgCameraRotateFill: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$3U) => react_jsx_runtime.JSX.Element;

interface SVGRProps$3T {
    title?: string;
    titleId?: string;
}
declare const SvgCancelMessage: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$3T) => react_jsx_runtime.JSX.Element;

interface SVGRProps$3S {
    title?: string;
    titleId?: string;
}
declare const SvgCancelRemote: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$3S) => react_jsx_runtime.JSX.Element;

interface SVGRProps$3R {
    title?: string;
    titleId?: string;
}
declare const SvgCaptcha: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$3R) => react_jsx_runtime.JSX.Element;

interface SVGRProps$3Q {
    title?: string;
    titleId?: string;
}
declare const SvgCard: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$3Q) => react_jsx_runtime.JSX.Element;

interface SVGRProps$3P {
    title?: string;
    titleId?: string;
}
declare const SvgCard2: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$3P) => react_jsx_runtime.JSX.Element;

interface SVGRProps$3O {
    title?: string;
    titleId?: string;
}
declare const SvgCardReceive: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$3O) => react_jsx_runtime.JSX.Element;

interface SVGRProps$3N {
    title?: string;
    titleId?: string;
}
declare const SvgCardSearch: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$3N) => react_jsx_runtime.JSX.Element;

interface SVGRProps$3M {
    title?: string;
    titleId?: string;
}
declare const SvgCardSend: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$3M) => react_jsx_runtime.JSX.Element;

interface SVGRProps$3L {
    title?: string;
    titleId?: string;
}
declare const SvgCardTransfer: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$3L) => react_jsx_runtime.JSX.Element;

interface SVGRProps$3K {
    title?: string;
    titleId?: string;
}
declare const SvgChangeLogo: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$3K) => react_jsx_runtime.JSX.Element;

interface SVGRProps$3J {
    title?: string;
    titleId?: string;
}
declare const SvgChangeRemote: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$3J) => react_jsx_runtime.JSX.Element;

interface SVGRProps$3I {
    title?: string;
    titleId?: string;
}
declare const SvgChat: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$3I) => react_jsx_runtime.JSX.Element;

interface SVGRProps$3H {
    title?: string;
    titleId?: string;
}
declare const SvgCheck: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$3H) => react_jsx_runtime.JSX.Element;

interface SVGRProps$3G {
    title?: string;
    titleId?: string;
}
declare const SvgCheckCircleFill: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$3G) => react_jsx_runtime.JSX.Element;

interface SVGRProps$3F {
    title?: string;
    titleId?: string;
}
declare const SvgCheckCircleOutline: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$3F) => react_jsx_runtime.JSX.Element;

interface SVGRProps$3E {
    title?: string;
    titleId?: string;
}
declare const SvgCheckSquareFill: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$3E) => react_jsx_runtime.JSX.Element;

interface SVGRProps$3D {
    title?: string;
    titleId?: string;
}
declare const SvgCheckSquareOutline: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$3D) => react_jsx_runtime.JSX.Element;

interface SVGRProps$3C {
    title?: string;
    titleId?: string;
}
declare const SvgChecklist: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$3C) => react_jsx_runtime.JSX.Element;

interface SVGRProps$3B {
    title?: string;
    titleId?: string;
}
declare const SvgCircleFill: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$3B) => react_jsx_runtime.JSX.Element;

interface SVGRProps$3A {
    title?: string;
    titleId?: string;
}
declare const SvgCircleOutline: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$3A) => react_jsx_runtime.JSX.Element;

interface SVGRProps$3z {
    title?: string;
    titleId?: string;
}
declare const SvgClockCircle: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$3z) => react_jsx_runtime.JSX.Element;

interface SVGRProps$3y {
    title?: string;
    titleId?: string;
}
declare const SvgClockDark: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$3y) => react_jsx_runtime.JSX.Element;

interface SVGRProps$3x {
    title?: string;
    titleId?: string;
}
declare const SvgClockSquare: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$3x) => react_jsx_runtime.JSX.Element;

interface SVGRProps$3w {
    title?: string;
    titleId?: string;
}
declare const SvgClose: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$3w) => react_jsx_runtime.JSX.Element;

interface SVGRProps$3v {
    title?: string;
    titleId?: string;
}
declare const SvgCloseCircleFill: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$3v) => react_jsx_runtime.JSX.Element;

interface SVGRProps$3u {
    title?: string;
    titleId?: string;
}
declare const SvgCloseCircleOutline: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$3u) => react_jsx_runtime.JSX.Element;

interface SVGRProps$3t {
    title?: string;
    titleId?: string;
}
declare const SvgCloseSquareFill: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$3t) => react_jsx_runtime.JSX.Element;

interface SVGRProps$3s {
    title?: string;
    titleId?: string;
}
declare const SvgCloseSquareOutline: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$3s) => react_jsx_runtime.JSX.Element;

interface SVGRProps$3r {
    title?: string;
    titleId?: string;
}
declare const SvgCloseWindows: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$3r) => react_jsx_runtime.JSX.Element;

interface SVGRProps$3q {
    title?: string;
    titleId?: string;
}
declare const SvgCoding: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$3q) => react_jsx_runtime.JSX.Element;

interface SVGRProps$3p {
    title?: string;
    titleId?: string;
}
declare const SvgCompanies: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$3p) => react_jsx_runtime.JSX.Element;

interface SVGRProps$3o {
    title?: string;
    titleId?: string;
}
declare const SvgControlRemote: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$3o) => react_jsx_runtime.JSX.Element;

interface SVGRProps$3n {
    title?: string;
    titleId?: string;
}
declare const SvgCopy: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$3n) => react_jsx_runtime.JSX.Element;

interface SVGRProps$3m {
    title?: string;
    titleId?: string;
}
declare const SvgCopyRow: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$3m) => react_jsx_runtime.JSX.Element;

interface SVGRProps$3l {
    title?: string;
    titleId?: string;
}
declare const SvgDashboard: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$3l) => react_jsx_runtime.JSX.Element;

interface SVGRProps$3k {
    title?: string;
    titleId?: string;
}
declare const SvgDateTime: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$3k) => react_jsx_runtime.JSX.Element;

interface SVGRProps$3j {
    title?: string;
    titleId?: string;
}
declare const SvgDelete: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$3j) => react_jsx_runtime.JSX.Element;

interface SVGRProps$3i {
    title?: string;
    titleId?: string;
}
declare const SvgDeleteFill: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$3i) => react_jsx_runtime.JSX.Element;

interface SVGRProps$3h {
    title?: string;
    titleId?: string;
}
declare const SvgDeleteRow: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$3h) => react_jsx_runtime.JSX.Element;

interface SVGRProps$3g {
    title?: string;
    titleId?: string;
}
declare const SvgDeliveryMessage: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$3g) => react_jsx_runtime.JSX.Element;

interface SVGRProps$3f {
    title?: string;
    titleId?: string;
}
declare const SvgDescription: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$3f) => react_jsx_runtime.JSX.Element;

interface SVGRProps$3e {
    title?: string;
    titleId?: string;
}
declare const SvgDescriptionFill: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$3e) => react_jsx_runtime.JSX.Element;

interface SVGRProps$3d {
    title?: string;
    titleId?: string;
}
declare const SvgDescriptionOutline: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$3d) => react_jsx_runtime.JSX.Element;

interface SVGRProps$3c {
    title?: string;
    titleId?: string;
}
declare const SvgDeviceId: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$3c) => react_jsx_runtime.JSX.Element;

interface SVGRProps$3b {
    title?: string;
    titleId?: string;
}
declare const SvgDirection: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$3b) => react_jsx_runtime.JSX.Element;

interface SVGRProps$3a {
    title?: string;
    titleId?: string;
}
declare const SvgDollarCircle: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$3a) => react_jsx_runtime.JSX.Element;

interface SVGRProps$39 {
    title?: string;
    titleId?: string;
}
declare const SvgDollarCircleCancel: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$39) => react_jsx_runtime.JSX.Element;

interface SVGRProps$38 {
    title?: string;
    titleId?: string;
}
declare const SvgDollarCircleChart: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$38) => react_jsx_runtime.JSX.Element;

interface SVGRProps$37 {
    title?: string;
    titleId?: string;
}
declare const SvgDollarCircleExpensive: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$37) => react_jsx_runtime.JSX.Element;

interface SVGRProps$36 {
    title?: string;
    titleId?: string;
}
declare const SvgDollarCircleIncome: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$36) => react_jsx_runtime.JSX.Element;

interface SVGRProps$35 {
    title?: string;
    titleId?: string;
}
declare const SvgDollarCircleTransfer: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$35) => react_jsx_runtime.JSX.Element;

interface SVGRProps$34 {
    title?: string;
    titleId?: string;
}
declare const SvgDollarSquare: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$34) => react_jsx_runtime.JSX.Element;

interface SVGRProps$33 {
    title?: string;
    titleId?: string;
}
declare const SvgDollarSquareCancel: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$33) => react_jsx_runtime.JSX.Element;

interface SVGRProps$32 {
    title?: string;
    titleId?: string;
}
declare const SvgDollarSquareChart: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$32) => react_jsx_runtime.JSX.Element;

interface SVGRProps$31 {
    title?: string;
    titleId?: string;
}
declare const SvgDollarSquareExpensive: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$31) => react_jsx_runtime.JSX.Element;

interface SVGRProps$30 {
    title?: string;
    titleId?: string;
}
declare const SvgDollarSquareIncome: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$30) => react_jsx_runtime.JSX.Element;

interface SVGRProps$2$ {
    title?: string;
    titleId?: string;
}
declare const SvgDollarSquareTransfer: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$2$) => react_jsx_runtime.JSX.Element;

interface SVGRProps$2_ {
    title?: string;
    titleId?: string;
}
declare const SvgDoubleAltArrowDown: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$2_) => react_jsx_runtime.JSX.Element;

interface SVGRProps$2Z {
    title?: string;
    titleId?: string;
}
declare const SvgDoubleAltArrowLeft: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$2Z) => react_jsx_runtime.JSX.Element;

interface SVGRProps$2Y {
    title?: string;
    titleId?: string;
}
declare const SvgDoubleAltArrowRight: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$2Y) => react_jsx_runtime.JSX.Element;

interface SVGRProps$2X {
    title?: string;
    titleId?: string;
}
declare const SvgDoubleAltArrowUp: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$2X) => react_jsx_runtime.JSX.Element;

interface SVGRProps$2W {
    title?: string;
    titleId?: string;
}
declare const SvgDown: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$2W) => react_jsx_runtime.JSX.Element;

interface SVGRProps$2V {
    title?: string;
    titleId?: string;
}
declare const SvgDownload: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$2V) => react_jsx_runtime.JSX.Element;

interface SVGRProps$2U {
    title?: string;
    titleId?: string;
}
declare const SvgDownloadFill: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$2U) => react_jsx_runtime.JSX.Element;

interface SVGRProps$2T {
    title?: string;
    titleId?: string;
}
declare const SvgDownloadVideo: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$2T) => react_jsx_runtime.JSX.Element;

interface SVGRProps$2S {
    title?: string;
    titleId?: string;
}
declare const SvgDownloadVoiceBox: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$2S) => react_jsx_runtime.JSX.Element;

interface SVGRProps$2R {
    title?: string;
    titleId?: string;
}
declare const SvgEditFill: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$2R) => react_jsx_runtime.JSX.Element;

interface SVGRProps$2Q {
    title?: string;
    titleId?: string;
}
declare const SvgEditOutline: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$2Q) => react_jsx_runtime.JSX.Element;

interface SVGRProps$2P {
    title?: string;
    titleId?: string;
}
declare const SvgEditPen: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$2P) => react_jsx_runtime.JSX.Element;

interface SVGRProps$2O {
    title?: string;
    titleId?: string;
}
declare const SvgEditProfile: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$2O) => react_jsx_runtime.JSX.Element;

interface SVGRProps$2N {
    title?: string;
    titleId?: string;
}
declare const SvgEmail: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$2N) => react_jsx_runtime.JSX.Element;

interface SVGRProps$2M {
    title?: string;
    titleId?: string;
}
declare const SvgEmptyFolder: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$2M) => react_jsx_runtime.JSX.Element;

interface SVGRProps$2L {
    title?: string;
    titleId?: string;
}
declare const SvgEndDocument: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$2L) => react_jsx_runtime.JSX.Element;

interface SVGRProps$2K {
    title?: string;
    titleId?: string;
}
declare const SvgEndDocumentFill: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$2K) => react_jsx_runtime.JSX.Element;

interface SVGRProps$2J {
    title?: string;
    titleId?: string;
}
declare const SvgEnter: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$2J) => react_jsx_runtime.JSX.Element;

interface SVGRProps$2I {
    title?: string;
    titleId?: string;
}
declare const SvgEnterFill: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$2I) => react_jsx_runtime.JSX.Element;

interface SVGRProps$2H {
    title?: string;
    titleId?: string;
}
declare const SvgEntity: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$2H) => react_jsx_runtime.JSX.Element;

interface SVGRProps$2G {
    title?: string;
    titleId?: string;
}
declare const SvgExit: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$2G) => react_jsx_runtime.JSX.Element;

interface SVGRProps$2F {
    title?: string;
    titleId?: string;
}
declare const SvgExportDoc: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$2F) => react_jsx_runtime.JSX.Element;

interface SVGRProps$2E {
    title?: string;
    titleId?: string;
}
declare const SvgExportJpg: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$2E) => react_jsx_runtime.JSX.Element;

interface SVGRProps$2D {
    title?: string;
    titleId?: string;
}
declare const SvgExportPdf: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$2D) => react_jsx_runtime.JSX.Element;

interface SVGRProps$2C {
    title?: string;
    titleId?: string;
}
declare const SvgExportXls: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$2C) => react_jsx_runtime.JSX.Element;

interface SVGRProps$2B {
    title?: string;
    titleId?: string;
}
declare const SvgExportZip: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$2B) => react_jsx_runtime.JSX.Element;

interface SVGRProps$2A {
    title?: string;
    titleId?: string;
}
declare const SvgEyeClosed: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$2A) => react_jsx_runtime.JSX.Element;

interface SVGRProps$2z {
    title?: string;
    titleId?: string;
}
declare const SvgFailedMessage: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$2z) => react_jsx_runtime.JSX.Element;

interface SVGRProps$2y {
    title?: string;
    titleId?: string;
}
declare const SvgFavoriteDeselect: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$2y) => react_jsx_runtime.JSX.Element;

interface SVGRProps$2x {
    title?: string;
    titleId?: string;
}
declare const SvgFavoriteSelected: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$2x) => react_jsx_runtime.JSX.Element;

interface SVGRProps$2w {
    title?: string;
    titleId?: string;
}
declare const SvgFilter: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$2w) => react_jsx_runtime.JSX.Element;

interface SVGRProps$2v {
    title?: string;
    titleId?: string;
}
declare const SvgFilterFill: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$2v) => react_jsx_runtime.JSX.Element;

interface SVGRProps$2u {
    title?: string;
    titleId?: string;
}
declare const SvgFilterTable: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$2u) => react_jsx_runtime.JSX.Element;

interface SVGRProps$2t {
    title?: string;
    titleId?: string;
}
declare const SvgFingerPrint: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$2t) => react_jsx_runtime.JSX.Element;

interface SVGRProps$2s {
    title?: string;
    titleId?: string;
}
declare const SvgFingerprintCheckIn: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$2s) => react_jsx_runtime.JSX.Element;

interface SVGRProps$2r {
    title?: string;
    titleId?: string;
}
declare const SvgFingerprintCheckout: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$2r) => react_jsx_runtime.JSX.Element;

interface SVGRProps$2q {
    title?: string;
    titleId?: string;
}
declare const SvgFinishTransaction: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$2q) => react_jsx_runtime.JSX.Element;

interface SVGRProps$2p {
    title?: string;
    titleId?: string;
}
declare const SvgFolderWindows: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$2p) => react_jsx_runtime.JSX.Element;

interface SVGRProps$2o {
    title?: string;
    titleId?: string;
}
declare const SvgForwardMessage: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$2o) => react_jsx_runtime.JSX.Element;

interface SVGRProps$2n {
    title?: string;
    titleId?: string;
}
declare const SvgForwardSingleColor: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$2n) => react_jsx_runtime.JSX.Element;

interface SVGRProps$2m {
    title?: string;
    titleId?: string;
}
declare const SvgFullScreen: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$2m) => react_jsx_runtime.JSX.Element;

interface SVGRProps$2l {
    title?: string;
    titleId?: string;
}
declare const SvgFullScreenExit: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$2l) => react_jsx_runtime.JSX.Element;

interface SVGRProps$2k {
    title?: string;
    titleId?: string;
}
declare const SvgGalleryDownload: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$2k) => react_jsx_runtime.JSX.Element;

interface SVGRProps$2j {
    title?: string;
    titleId?: string;
}
declare const SvgGroupAction: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$2j) => react_jsx_runtime.JSX.Element;

interface SVGRProps$2i {
    title?: string;
    titleId?: string;
}
declare const SvgGroupChat: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$2i) => react_jsx_runtime.JSX.Element;

interface SVGRProps$2h {
    title?: string;
    titleId?: string;
}
declare const SvgHalfArrowLeft: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$2h) => react_jsx_runtime.JSX.Element;

interface SVGRProps$2g {
    title?: string;
    titleId?: string;
}
declare const SvgHalfArrowRight: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$2g) => react_jsx_runtime.JSX.Element;

interface SVGRProps$2f {
    title?: string;
    titleId?: string;
}
declare const SvgHandMoney: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$2f) => react_jsx_runtime.JSX.Element;

interface SVGRProps$2e {
    title?: string;
    titleId?: string;
}
declare const SvgHistory: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$2e) => react_jsx_runtime.JSX.Element;

interface SVGRProps$2d {
    title?: string;
    titleId?: string;
}
declare const SvgHome: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$2d) => react_jsx_runtime.JSX.Element;

interface SVGRProps$2c {
    title?: string;
    titleId?: string;
}
declare const SvgImage: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$2c) => react_jsx_runtime.JSX.Element;

interface SVGRProps$2b {
    title?: string;
    titleId?: string;
}
declare const SvgIncognito: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$2b) => react_jsx_runtime.JSX.Element;

interface SVGRProps$2a {
    title?: string;
    titleId?: string;
}
declare const SvgIncomeCall: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$2a) => react_jsx_runtime.JSX.Element;

interface SVGRProps$29 {
    title?: string;
    titleId?: string;
}
declare const SvgInfo: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$29) => react_jsx_runtime.JSX.Element;

interface SVGRProps$28 {
    title?: string;
    titleId?: string;
}
declare const SvgInfoCircleFill: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$28) => react_jsx_runtime.JSX.Element;

interface SVGRProps$27 {
    title?: string;
    titleId?: string;
}
declare const SvgInfoCircleOutline: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$27) => react_jsx_runtime.JSX.Element;

interface SVGRProps$26 {
    title?: string;
    titleId?: string;
}
declare const SvgInfoSquareFill: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$26) => react_jsx_runtime.JSX.Element;

interface SVGRProps$25 {
    title?: string;
    titleId?: string;
}
declare const SvgInfoSquareOutline: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$25) => react_jsx_runtime.JSX.Element;

interface SVGRProps$24 {
    title?: string;
    titleId?: string;
}
declare const SvgLeft: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$24) => react_jsx_runtime.JSX.Element;

interface SVGRProps$23 {
    title?: string;
    titleId?: string;
}
declare const SvgLevels: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$23) => react_jsx_runtime.JSX.Element;

interface SVGRProps$22 {
    title?: string;
    titleId?: string;
}
declare const SvgLibrary: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$22) => react_jsx_runtime.JSX.Element;

interface SVGRProps$21 {
    title?: string;
    titleId?: string;
}
declare const SvgLikeMoney: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$21) => react_jsx_runtime.JSX.Element;

interface SVGRProps$20 {
    title?: string;
    titleId?: string;
}
declare const SvgLock: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$20) => react_jsx_runtime.JSX.Element;

interface SVGRProps$1$ {
    title?: string;
    titleId?: string;
}
declare const SvgLogOut: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$1$) => react_jsx_runtime.JSX.Element;

interface SVGRProps$1_ {
    title?: string;
    titleId?: string;
}
declare const SvgLogin: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$1_) => react_jsx_runtime.JSX.Element;

interface SVGRProps$1Z {
    title?: string;
    titleId?: string;
}
declare const SvgManagement: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$1Z) => react_jsx_runtime.JSX.Element;

interface SVGRProps$1Y {
    title?: string;
    titleId?: string;
}
declare const SvgMaximizeSquare: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$1Y) => react_jsx_runtime.JSX.Element;

interface SVGRProps$1X {
    title?: string;
    titleId?: string;
}
declare const SvgMaximumWindows: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$1X) => react_jsx_runtime.JSX.Element;

interface SVGRProps$1W {
    title?: string;
    titleId?: string;
}
declare const SvgMelody: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$1W) => react_jsx_runtime.JSX.Element;

interface SVGRProps$1V {
    title?: string;
    titleId?: string;
}
declare const SvgMelodyBox: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$1V) => react_jsx_runtime.JSX.Element;

interface SVGRProps$1U {
    title?: string;
    titleId?: string;
}
declare const SvgMenu: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$1U) => react_jsx_runtime.JSX.Element;

interface SVGRProps$1T {
    title?: string;
    titleId?: string;
}
declare const SvgMenuHamburger: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$1T) => react_jsx_runtime.JSX.Element;

interface SVGRProps$1S {
    title?: string;
    titleId?: string;
}
declare const SvgMenuHorizontalDots: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$1S) => react_jsx_runtime.JSX.Element;

interface SVGRProps$1R {
    title?: string;
    titleId?: string;
}
declare const SvgMenuVerticalDots: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$1R) => react_jsx_runtime.JSX.Element;

interface SVGRProps$1Q {
    title?: string;
    titleId?: string;
}
declare const SvgMenuVerticalDotsFill: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$1Q) => react_jsx_runtime.JSX.Element;

interface SVGRProps$1P {
    title?: string;
    titleId?: string;
}
declare const SvgMicrophone: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$1P) => react_jsx_runtime.JSX.Element;

interface SVGRProps$1O {
    title?: string;
    titleId?: string;
}
declare const SvgMicrophoneMute: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$1O) => react_jsx_runtime.JSX.Element;

interface SVGRProps$1N {
    title?: string;
    titleId?: string;
}
declare const SvgMinimizeSquare: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$1N) => react_jsx_runtime.JSX.Element;

interface SVGRProps$1M {
    title?: string;
    titleId?: string;
}
declare const SvgMinimizeWindows: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$1M) => react_jsx_runtime.JSX.Element;

interface SVGRProps$1L {
    title?: string;
    titleId?: string;
}
declare const SvgMissCall: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$1L) => react_jsx_runtime.JSX.Element;

interface SVGRProps$1K {
    title?: string;
    titleId?: string;
}
declare const SvgMoneyBag: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$1K) => react_jsx_runtime.JSX.Element;

interface SVGRProps$1J {
    title?: string;
    titleId?: string;
}
declare const SvgMonitor: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$1J) => react_jsx_runtime.JSX.Element;

interface SVGRProps$1I {
    title?: string;
    titleId?: string;
}
declare const SvgMoon: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$1I) => react_jsx_runtime.JSX.Element;

interface SVGRProps$1H {
    title?: string;
    titleId?: string;
}
declare const SvgMuted: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$1H) => react_jsx_runtime.JSX.Element;

interface SVGRProps$1G {
    title?: string;
    titleId?: string;
}
declare const SvgNextDocument: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$1G) => react_jsx_runtime.JSX.Element;

interface SVGRProps$1F {
    title?: string;
    titleId?: string;
}
declare const SvgOutgoingCall: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$1F) => react_jsx_runtime.JSX.Element;

interface SVGRProps$1E {
    title?: string;
    titleId?: string;
}
declare const SvgPassCode: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$1E) => react_jsx_runtime.JSX.Element;

interface SVGRProps$1D {
    title?: string;
    titleId?: string;
}
declare const SvgPassword: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$1D) => react_jsx_runtime.JSX.Element;

interface SVGRProps$1C {
    title?: string;
    titleId?: string;
}
declare const SvgPauseVoiceBox: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$1C) => react_jsx_runtime.JSX.Element;

interface SVGRProps$1B {
    title?: string;
    titleId?: string;
}
declare const SvgPayable: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$1B) => react_jsx_runtime.JSX.Element;

interface SVGRProps$1A {
    title?: string;
    titleId?: string;
}
declare const SvgPaymentOrder: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$1A) => react_jsx_runtime.JSX.Element;

interface SVGRProps$1z {
    title?: string;
    titleId?: string;
}
declare const SvgPen: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$1z) => react_jsx_runtime.JSX.Element;

interface SVGRProps$1y {
    title?: string;
    titleId?: string;
}
declare const SvgPettyCash: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$1y) => react_jsx_runtime.JSX.Element;

interface SVGRProps$1x {
    title?: string;
    titleId?: string;
}
declare const SvgPhoto: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$1x) => react_jsx_runtime.JSX.Element;

interface SVGRProps$1w {
    title?: string;
    titleId?: string;
}
declare const SvgPhotoOutline: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$1w) => react_jsx_runtime.JSX.Element;

interface SVGRProps$1v {
    title?: string;
    titleId?: string;
}
declare const SvgPicture: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$1v) => react_jsx_runtime.JSX.Element;

interface SVGRProps$1u {
    title?: string;
    titleId?: string;
}
declare const SvgPin: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$1u) => react_jsx_runtime.JSX.Element;

interface SVGRProps$1t {
    title?: string;
    titleId?: string;
}
declare const SvgPinCircle: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$1t) => react_jsx_runtime.JSX.Element;

interface SVGRProps$1s {
    title?: string;
    titleId?: string;
}
declare const SvgPinList: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$1s) => react_jsx_runtime.JSX.Element;

interface SVGRProps$1r {
    title?: string;
    titleId?: string;
}
declare const SvgPlayVoiceBox: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$1r) => react_jsx_runtime.JSX.Element;

interface SVGRProps$1q {
    title?: string;
    titleId?: string;
}
declare const SvgPopup: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$1q) => react_jsx_runtime.JSX.Element;

interface SVGRProps$1p {
    title?: string;
    titleId?: string;
}
declare const SvgPresetFilters: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$1p) => react_jsx_runtime.JSX.Element;

interface SVGRProps$1o {
    title?: string;
    titleId?: string;
}
declare const SvgPreviousDocument: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$1o) => react_jsx_runtime.JSX.Element;

interface SVGRProps$1n {
    title?: string;
    titleId?: string;
}
declare const SvgPrinter: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$1n) => react_jsx_runtime.JSX.Element;

interface SVGRProps$1m {
    title?: string;
    titleId?: string;
}
declare const SvgPrinterFill: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$1m) => react_jsx_runtime.JSX.Element;

interface SVGRProps$1l {
    title?: string;
    titleId?: string;
}
declare const SvgQuestionCircle: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$1l) => react_jsx_runtime.JSX.Element;

interface SVGRProps$1k {
    title?: string;
    titleId?: string;
}
declare const SvgReceipt: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$1k) => react_jsx_runtime.JSX.Element;

interface SVGRProps$1j {
    title?: string;
    titleId?: string;
}
declare const SvgReceiptEdit: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$1j) => react_jsx_runtime.JSX.Element;

interface SVGRProps$1i {
    title?: string;
    titleId?: string;
}
declare const SvgReceivable: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$1i) => react_jsx_runtime.JSX.Element;

interface SVGRProps$1h {
    title?: string;
    titleId?: string;
}
declare const SvgRecordVideo: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$1h) => react_jsx_runtime.JSX.Element;

interface SVGRProps$1g {
    title?: string;
    titleId?: string;
}
declare const SvgReject: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$1g) => react_jsx_runtime.JSX.Element;

interface SVGRProps$1f {
    title?: string;
    titleId?: string;
}
declare const SvgRejectCircleFill: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$1f) => react_jsx_runtime.JSX.Element;

interface SVGRProps$1e {
    title?: string;
    titleId?: string;
}
declare const SvgRejectCircleOutline: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$1e) => react_jsx_runtime.JSX.Element;

interface SVGRProps$1d {
    title?: string;
    titleId?: string;
}
declare const SvgRejectFill: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$1d) => react_jsx_runtime.JSX.Element;

interface SVGRProps$1c {
    title?: string;
    titleId?: string;
}
declare const SvgRejectSquareFill: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$1c) => react_jsx_runtime.JSX.Element;

interface SVGRProps$1b {
    title?: string;
    titleId?: string;
}
declare const SvgRejectSquareOutline: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$1b) => react_jsx_runtime.JSX.Element;

interface SVGRProps$1a {
    title?: string;
    titleId?: string;
}
declare const SvgRejectedReceipt: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$1a) => react_jsx_runtime.JSX.Element;

interface SVGRProps$19 {
    title?: string;
    titleId?: string;
}
declare const SvgRejectedReceiptOutline: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$19) => react_jsx_runtime.JSX.Element;

interface SVGRProps$18 {
    title?: string;
    titleId?: string;
}
declare const SvgRemoteAssist: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$18) => react_jsx_runtime.JSX.Element;

interface SVGRProps$17 {
    title?: string;
    titleId?: string;
}
declare const SvgRemoveAdmin: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$17) => react_jsx_runtime.JSX.Element;

interface SVGRProps$16 {
    title?: string;
    titleId?: string;
}
declare const SvgRemoveUser: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$16) => react_jsx_runtime.JSX.Element;

interface SVGRProps$15 {
    title?: string;
    titleId?: string;
}
declare const SvgReplayMessage: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$15) => react_jsx_runtime.JSX.Element;

interface SVGRProps$14 {
    title?: string;
    titleId?: string;
}
declare const SvgReport: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$14) => react_jsx_runtime.JSX.Element;

interface SVGRProps$13 {
    title?: string;
    titleId?: string;
}
declare const SvgReportCreator: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$13) => react_jsx_runtime.JSX.Element;

interface SVGRProps$12 {
    title?: string;
    titleId?: string;
}
declare const SvgRequest: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$12) => react_jsx_runtime.JSX.Element;

interface SVGRProps$11 {
    title?: string;
    titleId?: string;
}
declare const SvgResendMessage: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$11) => react_jsx_runtime.JSX.Element;

interface SVGRProps$10 {
    title?: string;
    titleId?: string;
}
declare const SvgRestart: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$10) => react_jsx_runtime.JSX.Element;

interface SVGRProps$$ {
    title?: string;
    titleId?: string;
}
declare const SvgRight: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$$) => react_jsx_runtime.JSX.Element;

interface SVGRProps$_ {
    title?: string;
    titleId?: string;
}
declare const SvgRoles: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$_) => react_jsx_runtime.JSX.Element;

interface SVGRProps$Z {
    title?: string;
    titleId?: string;
}
declare const SvgSave: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$Z) => react_jsx_runtime.JSX.Element;

interface SVGRProps$Y {
    title?: string;
    titleId?: string;
}
declare const SvgSchema: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$Y) => react_jsx_runtime.JSX.Element;

interface SVGRProps$X {
    title?: string;
    titleId?: string;
}
declare const SvgSearch: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$X) => react_jsx_runtime.JSX.Element;

interface SVGRProps$W {
    title?: string;
    titleId?: string;
}
declare const SvgSearchSmall: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$W) => react_jsx_runtime.JSX.Element;

interface SVGRProps$V {
    title?: string;
    titleId?: string;
}
declare const SvgSecretCall: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$V) => react_jsx_runtime.JSX.Element;

interface SVGRProps$U {
    title?: string;
    titleId?: string;
}
declare const SvgSecretFile: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$U) => react_jsx_runtime.JSX.Element;

interface SVGRProps$T {
    title?: string;
    titleId?: string;
}
declare const SvgSecretFileDownload: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$T) => react_jsx_runtime.JSX.Element;

interface SVGRProps$S {
    title?: string;
    titleId?: string;
}
declare const SvgSecretImage: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$S) => react_jsx_runtime.JSX.Element;

interface SVGRProps$R {
    title?: string;
    titleId?: string;
}
declare const SvgSecretImageDownload: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$R) => react_jsx_runtime.JSX.Element;

interface SVGRProps$Q {
    title?: string;
    titleId?: string;
}
declare const SvgSecretLocation: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$Q) => react_jsx_runtime.JSX.Element;

interface SVGRProps$P {
    title?: string;
    titleId?: string;
}
declare const SvgSecretLocationDownload: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$P) => react_jsx_runtime.JSX.Element;

interface SVGRProps$O {
    title?: string;
    titleId?: string;
}
declare const SvgSecretMassage: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$O) => react_jsx_runtime.JSX.Element;

interface SVGRProps$N {
    title?: string;
    titleId?: string;
}
declare const SvgSecretMelody: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$N) => react_jsx_runtime.JSX.Element;

interface SVGRProps$M {
    title?: string;
    titleId?: string;
}
declare const SvgSecretMelodyDownload: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$M) => react_jsx_runtime.JSX.Element;

interface SVGRProps$L {
    title?: string;
    titleId?: string;
}
declare const SvgSecretVideo: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$L) => react_jsx_runtime.JSX.Element;

interface SVGRProps$K {
    title?: string;
    titleId?: string;
}
declare const SvgSecretVoice: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$K) => react_jsx_runtime.JSX.Element;

interface SVGRProps$J {
    title?: string;
    titleId?: string;
}
declare const SvgSecretVoiceDownload: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$J) => react_jsx_runtime.JSX.Element;

interface SVGRProps$I {
    title?: string;
    titleId?: string;
}
declare const SvgSend: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$I) => react_jsx_runtime.JSX.Element;

interface SVGRProps$H {
    title?: string;
    titleId?: string;
}
declare const SvgSendMessage: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$H) => react_jsx_runtime.JSX.Element;

interface SVGRProps$G {
    title?: string;
    titleId?: string;
}
declare const SvgSetAdmin: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$G) => react_jsx_runtime.JSX.Element;

interface SVGRProps$F {
    title?: string;
    titleId?: string;
}
declare const SvgSetFilter: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$F) => react_jsx_runtime.JSX.Element;

interface SVGRProps$E {
    title?: string;
    titleId?: string;
}
declare const SvgSetting: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$E) => react_jsx_runtime.JSX.Element;

interface SVGRProps$D {
    title?: string;
    titleId?: string;
}
declare const SvgShare: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$D) => react_jsx_runtime.JSX.Element;

interface SVGRProps$C {
    title?: string;
    titleId?: string;
}
declare const SvgShareOutline: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$C) => react_jsx_runtime.JSX.Element;

interface SVGRProps$B {
    title?: string;
    titleId?: string;
}
declare const SvgShareScreen: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$B) => react_jsx_runtime.JSX.Element;

interface SVGRProps$A {
    title?: string;
    titleId?: string;
}
declare const SvgSmallCamera: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$A) => react_jsx_runtime.JSX.Element;

interface SVGRProps$z {
    title?: string;
    titleId?: string;
}
declare const SvgSortHorizontal: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$z) => react_jsx_runtime.JSX.Element;

interface SVGRProps$y {
    title?: string;
    titleId?: string;
}
declare const SvgSpeakerOff: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$y) => react_jsx_runtime.JSX.Element;

interface SVGRProps$x {
    title?: string;
    titleId?: string;
}
declare const SvgSquareFill: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$x) => react_jsx_runtime.JSX.Element;

interface SVGRProps$w {
    title?: string;
    titleId?: string;
}
declare const SvgSquareOutline: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$w) => react_jsx_runtime.JSX.Element;

interface SVGRProps$v {
    title?: string;
    titleId?: string;
}
declare const SvgStarInputTitle: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$v) => react_jsx_runtime.JSX.Element;

interface SVGRProps$u {
    title?: string;
    titleId?: string;
}
declare const SvgStatus: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$u) => react_jsx_runtime.JSX.Element;

interface SVGRProps$t {
    title?: string;
    titleId?: string;
}
declare const SvgStopVoiceBox: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$t) => react_jsx_runtime.JSX.Element;

interface SVGRProps$s {
    title?: string;
    titleId?: string;
}
declare const SvgSun: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$s) => react_jsx_runtime.JSX.Element;

interface SVGRProps$r {
    title?: string;
    titleId?: string;
}
declare const SvgTable: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$r) => react_jsx_runtime.JSX.Element;

interface SVGRProps$q {
    title?: string;
    titleId?: string;
}
declare const SvgTableEdit: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$q) => react_jsx_runtime.JSX.Element;

interface SVGRProps$p {
    title?: string;
    titleId?: string;
}
declare const SvgTakePhoto: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$p) => react_jsx_runtime.JSX.Element;

interface SVGRProps$o {
    title?: string;
    titleId?: string;
}
declare const SvgTools: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$o) => react_jsx_runtime.JSX.Element;

interface SVGRProps$n {
    title?: string;
    titleId?: string;
}
declare const SvgTranslateFile: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$n) => react_jsx_runtime.JSX.Element;

interface SVGRProps$m {
    title?: string;
    titleId?: string;
}
declare const SvgUnarchive: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$m) => react_jsx_runtime.JSX.Element;

interface SVGRProps$l {
    title?: string;
    titleId?: string;
}
declare const SvgUnmute: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$l) => react_jsx_runtime.JSX.Element;

interface SVGRProps$k {
    title?: string;
    titleId?: string;
}
declare const SvgUnpin: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$k) => react_jsx_runtime.JSX.Element;

interface SVGRProps$j {
    title?: string;
    titleId?: string;
}
declare const SvgUp: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$j) => react_jsx_runtime.JSX.Element;

interface SVGRProps$i {
    title?: string;
    titleId?: string;
}
declare const SvgUpload: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$i) => react_jsx_runtime.JSX.Element;

interface SVGRProps$h {
    title?: string;
    titleId?: string;
}
declare const SvgUploadFill: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$h) => react_jsx_runtime.JSX.Element;

interface SVGRProps$g {
    title?: string;
    titleId?: string;
}
declare const SvgUploadVoiceBox: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$g) => react_jsx_runtime.JSX.Element;

interface SVGRProps$f {
    title?: string;
    titleId?: string;
}
declare const SvgUser: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$f) => react_jsx_runtime.JSX.Element;

interface SVGRProps$e {
    title?: string;
    titleId?: string;
}
declare const SvgUserSetting: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$e) => react_jsx_runtime.JSX.Element;

interface SVGRProps$d {
    title?: string;
    titleId?: string;
}
declare const SvgUserSettingFill: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$d) => react_jsx_runtime.JSX.Element;

interface SVGRProps$c {
    title?: string;
    titleId?: string;
}
declare const SvgVideo: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$c) => react_jsx_runtime.JSX.Element;

interface SVGRProps$b {
    title?: string;
    titleId?: string;
}
declare const SvgVideoCallOff: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$b) => react_jsx_runtime.JSX.Element;

interface SVGRProps$a {
    title?: string;
    titleId?: string;
}
declare const SvgVideoCallOn: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$a) => react_jsx_runtime.JSX.Element;

interface SVGRProps$9 {
    title?: string;
    titleId?: string;
}
declare const SvgViewFill: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$9) => react_jsx_runtime.JSX.Element;

interface SVGRProps$8 {
    title?: string;
    titleId?: string;
}
declare const SvgViewOutline: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$8) => react_jsx_runtime.JSX.Element;

interface SVGRProps$7 {
    title?: string;
    titleId?: string;
}
declare const SvgViewReceipt: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$7) => react_jsx_runtime.JSX.Element;

interface SVGRProps$6 {
    title?: string;
    titleId?: string;
}
declare const SvgVoice: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$6) => react_jsx_runtime.JSX.Element;

interface SVGRProps$5 {
    title?: string;
    titleId?: string;
}
declare const SvgWarning: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$5) => react_jsx_runtime.JSX.Element;

interface SVGRProps$4 {
    title?: string;
    titleId?: string;
}
declare const SvgWarningCircleFill: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$4) => react_jsx_runtime.JSX.Element;

interface SVGRProps$3 {
    title?: string;
    titleId?: string;
}
declare const SvgWarningCircleOutline: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$3) => react_jsx_runtime.JSX.Element;

interface SVGRProps$2 {
    title?: string;
    titleId?: string;
}
declare const SvgWarningMessage: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$2) => react_jsx_runtime.JSX.Element;

interface SVGRProps$1 {
    title?: string;
    titleId?: string;
}
declare const SvgWarningSquareFill: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps$1) => react_jsx_runtime.JSX.Element;

interface SVGRProps {
    title?: string;
    titleId?: string;
}
declare const SvgWarningSquareOutline: ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => react_jsx_runtime.JSX.Element;

export { SvgAcceptedReceipt as AcceptedReceipt, SvgActions as Actions, SvgAdd as Add, SvgAddCircleFill as AddCircleFill, SvgAddCircleOutline as AddCircleOutline, SvgAddColumn as AddColumn, SvgAddDocument as AddDocument, SvgAddDocumentPocket as AddDocumentPocket, SvgAddFolder as AddFolder, SvgAddForms as AddForms, SvgAddGroup as AddGroup, SvgAddRow as AddRow, SvgAddSquareFill as AddSquareFill, SvgAddSquareOutline as AddSquareOutline, SvgAddUser as AddUser, SvgAllowRemote as AllowRemote, SvgArchive as Archive, SvgArrowDownBig as ArrowDownBig, SvgArrowDownFill as ArrowDownFill, SvgArrowDownSmall as ArrowDownSmall, SvgArrowLeftBig as ArrowLeftBig, SvgArrowLeftFill as ArrowLeftFill, SvgArrowLeftSmall as ArrowLeftSmall, SvgArrowRightBig as ArrowRightBig, SvgArrowRightFill as ArrowRightFill, SvgArrowRightSmall as ArrowRightSmall, SvgArrowUpBig as ArrowUpBig, SvgArrowUpFill as ArrowUpFill, SvgArrowUpSmall as ArrowUpSmall, SvgAttachFile as AttachFile, SvgAttachment as Attachment, SvgAttachmentSmall as AttachmentSmall, SvgBackSingleColor as BackSingleColor, SvgBasicInfo as BasicInfo, SvgBellFill as BellFill, SvgBellOutline as BellOutline, SvgBlur as Blur, SvgCalculator as Calculator, SvgCalculatorMinimalistic as CalculatorMinimalistic, SvgCalendar as Calendar, SvgCall as Call, SvgCalling as Calling, SvgCameraRotate as CameraRotate, SvgCameraRotateFill as CameraRotateFill, SvgCancelMessage as CancelMessage, SvgCancelRemote as CancelRemote, SvgCaptcha as Captcha, SvgCard as Card, SvgCard2 as Card2, SvgCardReceive as CardReceive, SvgCardSearch as CardSearch, SvgCardSend as CardSend, SvgCardTransfer as CardTransfer, SvgChangeLogo as ChangeLogo, SvgChangeRemote as ChangeRemote, SvgChat as Chat, SvgCheck as Check, SvgCheckCircleFill as CheckCircleFill, SvgCheckCircleOutline as CheckCircleOutline, SvgCheckSquareFill as CheckSquareFill, SvgCheckSquareOutline as CheckSquareOutline, SvgChecklist as Checklist, SvgCircleFill as CircleFill, SvgCircleOutline as CircleOutline, SvgClockCircle as ClockCircle, SvgClockDark as ClockDark, SvgClockSquare as ClockSquare, SvgClose as Close, SvgCloseCircleFill as CloseCircleFill, SvgCloseCircleOutline as CloseCircleOutline, SvgCloseSquareFill as CloseSquareFill, SvgCloseSquareOutline as CloseSquareOutline, SvgCloseWindows as CloseWindows, SvgCoding as Coding, SvgCompanies as Companies, SvgControlRemote as ControlRemote, SvgCopy as Copy, SvgCopyRow as CopyRow, SvgDashboard as Dashboard, SvgDateTime as DateTime, SvgDelete as Delete, SvgDeleteFill as DeleteFill, SvgDeleteRow as DeleteRow, SvgDeliveryMessage as DeliveryMessage, SvgDescription as Description, SvgDescriptionFill as DescriptionFill, SvgDescriptionOutline as DescriptionOutline, SvgDeviceId as DeviceId, SvgDirection as Direction, SvgDollarCircle as DollarCircle, SvgDollarCircleCancel as DollarCircleCancel, SvgDollarCircleChart as DollarCircleChart, SvgDollarCircleExpensive as DollarCircleExpensive, SvgDollarCircleIncome as DollarCircleIncome, SvgDollarCircleTransfer as DollarCircleTransfer, SvgDollarSquare as DollarSquare, SvgDollarSquareCancel as DollarSquareCancel, SvgDollarSquareChart as DollarSquareChart, SvgDollarSquareExpensive as DollarSquareExpensive, SvgDollarSquareIncome as DollarSquareIncome, SvgDollarSquareTransfer as DollarSquareTransfer, SvgDoubleAltArrowDown as DoubleAltArrowDown, SvgDoubleAltArrowLeft as DoubleAltArrowLeft, SvgDoubleAltArrowRight as DoubleAltArrowRight, SvgDoubleAltArrowUp as DoubleAltArrowUp, SvgDown as Down, SvgDownload as Download, SvgDownloadFill as DownloadFill, SvgDownloadVideo as DownloadVideo, SvgDownloadVoiceBox as DownloadVoiceBox, SvgEditFill as EditFill, SvgEditOutline as EditOutline, SvgEditPen as EditPen, SvgEditProfile as EditProfile, SvgEmail as Email, SvgEmptyFolder as EmptyFolder, SvgEndDocument as EndDocument, SvgEndDocumentFill as EndDocumentFill, SvgEnter as Enter, SvgEnterFill as EnterFill, SvgEntity as Entity, SvgExit as Exit, SvgExportDoc as ExportDoc, SvgExportJpg as ExportJpg, SvgExportPdf as ExportPdf, SvgExportXls as ExportXls, SvgExportZip as ExportZip, SvgEyeClosed as EyeClosed, SvgFailedMessage as FailedMessage, SvgFavoriteDeselect as FavoriteDeselect, SvgFavoriteSelected as FavoriteSelected, SvgFilter as Filter, SvgFilterFill as FilterFill, SvgFilterTable as FilterTable, SvgFingerPrint as FingerPrint, SvgFingerprintCheckIn as FingerprintCheckIn, SvgFingerprintCheckout as FingerprintCheckout, SvgFinishTransaction as FinishTransaction, SvgFolderWindows as FolderWindows, SvgForwardMessage as ForwardMessage, SvgForwardSingleColor as ForwardSingleColor, SvgFullScreen as FullScreen, SvgFullScreenExit as FullScreenExit, SvgGalleryDownload as GalleryDownload, SvgGroupAction as GroupAction, SvgGroupChat as GroupChat, SvgHalfArrowLeft as HalfArrowLeft, SvgHalfArrowRight as HalfArrowRight, SvgHandMoney as HandMoney, SvgHistory as History, SvgHome as Home, type IconsName, type IconsProps, SvgImage as Image, SvgIncognito as Incognito, SvgIncomeCall as IncomeCall, SvgInfo as Info, SvgInfoCircleFill as InfoCircleFill, SvgInfoCircleOutline as InfoCircleOutline, SvgInfoSquareFill as InfoSquareFill, SvgInfoSquareOutline as InfoSquareOutline, SvgLeft as Left, SvgLevels as Levels, SvgLibrary as Library, SvgLikeMoney as LikeMoney, SvgLock as Lock, SvgLogOut as LogOut, SvgLogin as Login, SvgManagement as Management, SvgMaximizeSquare as MaximizeSquare, SvgMaximumWindows as MaximumWindows, SvgMelody as Melody, SvgMelodyBox as MelodyBox, SvgMenu as Menu, SvgMenuHamburger as MenuHamburger, SvgMenuHorizontalDots as MenuHorizontalDots, SvgMenuVerticalDots as MenuVerticalDots, SvgMenuVerticalDotsFill as MenuVerticalDotsFill, SvgMicrophone as Microphone, SvgMicrophoneMute as MicrophoneMute, SvgMinimizeSquare as MinimizeSquare, SvgMinimizeWindows as MinimizeWindows, SvgMissCall as MissCall, SvgMoneyBag as MoneyBag, SvgMonitor as Monitor, SvgMoon as Moon, SvgMuted as Muted, SvgNextDocument as NextDocument, SvgOutgoingCall as OutgoingCall, SvgPassCode as PassCode, SvgPassword as Password, SvgPauseVoiceBox as PauseVoiceBox, SvgPayable as Payable, SvgPaymentOrder as PaymentOrder, SvgPen as Pen, SvgPettyCash as PettyCash, SvgPhoto as Photo, SvgPhotoOutline as PhotoOutline, SvgPicture as Picture, SvgPin as Pin, SvgPinCircle as PinCircle, SvgPinList as PinList, SvgPlayVoiceBox as PlayVoiceBox, SvgPopup as Popup, SvgPresetFilters as PresetFilters, SvgPreviousDocument as PreviousDocument, SvgPrinter as Printer, SvgPrinterFill as PrinterFill, SvgQuestionCircle as QuestionCircle, SvgReceipt as Receipt, SvgReceiptEdit as ReceiptEdit, SvgReceivable as Receivable, SvgRecordVideo as RecordVideo, SvgReject as Reject, SvgRejectCircleFill as RejectCircleFill, SvgRejectCircleOutline as RejectCircleOutline, SvgRejectFill as RejectFill, SvgRejectSquareFill as RejectSquareFill, SvgRejectSquareOutline as RejectSquareOutline, SvgRejectedReceipt as RejectedReceipt, SvgRejectedReceiptOutline as RejectedReceiptOutline, SvgRemoteAssist as RemoteAssist, SvgRemoveAdmin as RemoveAdmin, SvgRemoveUser as RemoveUser, SvgReplayMessage as ReplayMessage, SvgReport as Report, SvgReportCreator as ReportCreator, SvgRequest as Request, SvgResendMessage as ResendMessage, SvgRestart as Restart, SvgRight as Right, SvgRoles as Roles, SvgSave as Save, SvgSchema as Schema, SvgSearch as Search, SvgSearchSmall as SearchSmall, SvgSecretCall as SecretCall, SvgSecretFile as SecretFile, SvgSecretFileDownload as SecretFileDownload, SvgSecretImage as SecretImage, SvgSecretImageDownload as SecretImageDownload, SvgSecretLocation as SecretLocation, SvgSecretLocationDownload as SecretLocationDownload, SvgSecretMassage as SecretMassage, SvgSecretMelody as SecretMelody, SvgSecretMelodyDownload as SecretMelodyDownload, SvgSecretVideo as SecretVideo, SvgSecretVoice as SecretVoice, SvgSecretVoiceDownload as SecretVoiceDownload, SvgSend as Send, SvgSendMessage as SendMessage, SvgSetAdmin as SetAdmin, SvgSetFilter as SetFilter, SvgSetting as Setting, SvgShare as Share, SvgShareOutline as ShareOutline, SvgShareScreen as ShareScreen, SvgSmallCamera as SmallCamera, SvgSortHorizontal as SortHorizontal, SvgSpeakerOff as SpeakerOff, SvgSquareFill as SquareFill, SvgSquareOutline as SquareOutline, SvgStarInputTitle as StarInputTitle, SvgStatus as Status, SvgStopVoiceBox as StopVoiceBox, SvgSun as Sun, SvgTable as Table, SvgTableEdit as TableEdit, SvgTakePhoto as TakePhoto, SvgTools as Tools, SvgTranslateFile as TranslateFile, SvgUnarchive as Unarchive, SvgUnmute as Unmute, SvgUnpin as Unpin, SvgUp as Up, SvgUpload as Upload, SvgUploadFill as UploadFill, SvgUploadVoiceBox as UploadVoiceBox, SvgUser as User, SvgUserSetting as UserSetting, SvgUserSettingFill as UserSettingFill, SvgVideo as Video, SvgVideoCallOff as VideoCallOff, SvgVideoCallOn as VideoCallOn, SvgViewFill as ViewFill, SvgViewOutline as ViewOutline, SvgViewReceipt as ViewReceipt, SvgVoice as Voice, SvgWarning as Warning, SvgWarningCircleFill as WarningCircleFill, SvgWarningCircleOutline as WarningCircleOutline, SvgWarningMessage as WarningMessage, SvgWarningSquareFill as WarningSquareFill, SvgWarningSquareOutline as WarningSquareOutline, Icons as default };
