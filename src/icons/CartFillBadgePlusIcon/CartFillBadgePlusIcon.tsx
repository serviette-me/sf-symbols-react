import { IconProps } from "../../types"

export default function CartFillBadgePlusIconIcon({
  weight = "regular",
  color = "#000000",
  className = "",
}: IconProps) {
  switch (weight) {
    case "black":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 38.58203125 31.7734375"
          className={className}
        >
          <path
            d="              M31.1309 14.9026C35.2049 14.9026 38.5819 11.4976 38.5819 7.4376C38.5819 3.3636 35.2049 -0.0004 31.1309 -0.0004C27.0429 -0.0004 23.6799 3.3636 23.6799 7.4376C23.6799 11.4976 27.0429 14.9026 31.1309 14.9026ZM31.1309 12.4006C30.3109 12.4006 29.7639 11.8676 29.7639 11.0606V8.8046H27.5349C26.7419 8.8046 26.1819 8.2716 26.1819 7.4516C26.1819 6.6306 26.7149 6.0976 27.5349 6.0976H29.7639V3.8826C29.7639 3.0896 30.3109 2.5296 31.1309 2.5296C31.9379 2.5296 32.4839 3.0486 32.4839 3.8826V6.0976H34.7269C35.5199 6.0976 36.0659 6.6306 36.0659 7.4516C36.0659 8.2716 35.5199 8.8046 34.7269 8.8046H32.4839V11.0606C32.4839 11.8676 31.9379 12.4006 31.1309 12.4006ZM11.4019 24.0766H27.1389C28.2599 24.0766 29.2849 23.3106 29.2849 22.0386C29.2849 20.7816 28.2599 20.0426 27.1389 20.0426H12.0309C11.8809 20.0426 11.7989 19.9066 11.7719 19.7556L11.5799 18.4296H27.5759C28.8889 18.4296 29.8999 18.0056 30.6249 17.2536L30.7479 17.1306C25.6069 16.9116 21.4239 12.5916 21.4239 7.4376C21.4239 6.9726 21.4649 6.4946 21.5329 6.0426H9.8709L9.8159 5.6056C9.5569 3.8696 8.6539 2.9946 6.5899 2.9946H2.4059C1.1209 2.9946 -0.0001 4.0876 -0.0001 5.4136C-0.0001 6.7266 1.1209 7.8336 2.4059 7.8336H5.2909L7.0959 20.0566C7.4649 22.5996 8.8729 24.0766 11.4019 24.0766ZM9.5979 28.6976C9.5979 30.4066 10.9919 31.7736 12.6739 31.7736C14.3829 31.7736 15.7359 30.4066 15.7359 28.6976C15.7359 27.0156 14.3829 25.6346 12.6739 25.6346C10.9919 25.6346 9.5979 27.0156 9.5979 28.6976ZM21.6149 28.6976C21.6149 30.4066 22.9959 31.7736 24.6779 31.7736C26.3729 31.7736 27.7399 30.4066 27.7399 28.6976C27.7399 27.0156 26.3729 25.6346 24.6779 25.6346C22.9959 25.6346 21.6149 27.0156 21.6149 28.6976Z"
            fill={color}
          />
        </svg>
      )
    case "bold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 37.693359375 30.529296875"
          className={className}
        >
          <path
            d="              M30.5019 14.396C34.4119 14.396 37.6929 11.115 37.6929 7.191C37.6929 3.254 34.4399 0 30.5019 0C26.5509 0 23.2969 3.254 23.2969 7.191C23.2969 11.129 26.5509 14.396 30.5019 14.396ZM30.5019 11.853C29.8319 11.853 29.3949 11.416 29.3949 10.76V8.299H26.9469C26.3049 8.299 25.8539 7.861 25.8539 7.191C25.8539 6.535 26.2909 6.098 26.9469 6.098H29.3949V3.664C29.3949 3.008 29.8319 2.557 30.5019 2.557C31.1579 2.557 31.5959 2.994 31.5959 3.664V6.098H34.0569C34.6989 6.098 35.1369 6.535 35.1369 7.191C35.1369 7.861 34.6989 8.299 34.0569 8.299H31.5959V10.76C31.5959 11.416 31.1579 11.853 30.5019 11.853ZM11.2659 23.352H27.0979C27.9319 23.352 28.6699 22.75 28.6699 21.82C28.6699 20.904 27.9319 20.303 27.0979 20.303H11.6899C11.2249 20.303 10.9509 19.975 10.8689 19.482L10.6639 18.102H27.3439C28.7109 18.102 29.6819 17.582 30.2699 16.652L30.3929 16.447C25.2929 16.338 21.2319 12.223 21.2319 7.191C21.2319 6.754 21.2599 6.316 21.3279 5.879H8.9409L8.7769 4.799C8.5589 3.404 7.9299 2.693 6.2069 2.693H1.7089C0.7929 2.693 -0.0001 3.473 -0.0001 4.416C-0.0001 5.359 0.7929 6.139 1.7089 6.139H5.4549L7.4509 19.77C7.7929 21.998 9.0099 23.352 11.2659 23.352ZM9.7889 27.877C9.7889 29.354 10.9789 30.529 12.4279 30.529C13.9039 30.529 15.0799 29.354 15.0799 27.877C15.0799 26.414 13.9039 25.238 12.4279 25.238C10.9789 25.238 9.7889 26.414 9.7889 27.877ZM22.1759 27.877C22.1759 29.354 23.3649 30.529 24.8279 30.529C26.2909 30.529 27.4669 29.354 27.4669 27.877C27.4669 26.414 26.2909 25.238 24.8279 25.238C23.3649 25.238 22.1759 26.414 22.1759 27.877Z"
            fill={color}
          />
        </svg>
      )
    case "heavy":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 38.158203125 31.171875"
          className={className}
        >
          <path
            d="              M30.8299 14.6565C34.8359 14.6565 38.1579 11.3205 38.1579 7.3145C38.1579 3.3085 34.8499 0.0005 30.8299 0.0005C26.8109 0.0005 23.5019 3.3085 23.5019 7.3145C23.5019 11.3205 26.8109 14.6565 30.8299 14.6565ZM30.8299 12.1405C30.0919 12.1405 29.5999 11.6485 29.5999 10.9105V8.5585H27.2619C26.5369 8.5585 26.0309 8.0665 26.0309 7.3285C26.0309 6.5895 26.5099 6.0975 27.2619 6.0975H29.5999V3.7735C29.5999 3.0485 30.0919 2.5425 30.8299 2.5425C31.5679 2.5425 32.0609 3.0215 32.0609 3.7735V6.0975H34.4119C35.1369 6.0975 35.6289 6.5895 35.6289 7.3285C35.6289 8.0665 35.1369 8.5585 34.4119 8.5585H32.0609V10.9105C32.0609 11.6485 31.5679 12.1405 30.8299 12.1405ZM11.3339 23.7345H27.1249C28.0959 23.7345 28.9979 23.0505 28.9979 21.9295C28.9979 20.8355 28.0959 20.1525 27.1249 20.1525H11.8669C11.5659 20.1525 11.3889 19.9335 11.3479 19.6195L11.1429 18.2655H27.4669C28.8069 18.2655 29.7909 17.8005 30.4609 16.9665L30.5699 16.8025C25.4569 16.6385 21.3419 12.4145 21.3419 7.3145C21.3419 6.8635 21.3689 6.4125 21.4379 5.9605H9.4339L9.3239 5.2225C9.0919 3.6505 8.3129 2.8435 6.3989 2.8435H2.0779C0.9709 2.8435 -0.0001 3.8005 -0.0001 4.9355C-0.0001 6.0705 0.9709 7.0275 2.0779 7.0275H5.3729L7.2599 19.9065C7.6149 22.3125 8.9409 23.7345 11.3339 23.7345ZM9.6929 28.3145C9.6929 29.9005 10.9919 31.1715 12.5649 31.1715C14.1499 31.1715 15.4219 29.9005 15.4219 28.3145C15.4219 26.7285 14.1499 25.4435 12.5649 25.4435C10.9919 25.4435 9.6929 26.7285 9.6929 28.3145ZM21.8749 28.3145C21.8749 29.9005 23.1739 31.1715 24.7459 31.1715C26.3319 31.1715 27.6039 29.9005 27.6039 28.3145C27.6039 26.7285 26.3319 25.4435 24.7459 25.4435C23.1739 25.4435 21.8749 26.7285 21.8749 28.3145Z"
            fill={color}
          />
        </svg>
      )
    case "light":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 36.50390625 28.875"
          className={className}
        >
          <path
            d="              M29.7089 13.604C33.3999 13.604 36.5039 10.527 36.5039 6.809C36.5039 3.076 33.4279 0 29.7089 0C25.9769 0 22.8999 3.076 22.8999 6.809C22.8999 10.541 25.9769 13.604 29.7089 13.604ZM10.8969 22.299H27.0839C27.4809 22.299 27.8499 21.957 27.8499 21.506C27.8499 21.055 27.4809 20.713 27.0839 20.713H11.1289C10.2679 20.713 9.7479 20.166 9.5979 19.236L9.3239 17.459H26.9749C28.4379 17.459 29.2579 16.775 29.6539 15.545L29.7499 15.203C25.0329 15.162 21.3009 11.43 21.3009 6.809C21.3009 6.426 21.3279 6.057 21.3689 5.687H7.5879L7.2599 3.527C7.1369 2.721 6.8499 2.311 5.7559 2.311H0.7789C0.3559 2.311 -0.0001 2.666 -0.0001 3.104C-0.0001 3.527 0.3559 3.896 0.7789 3.896H5.6599L7.9569 19.482C8.2029 21.219 9.1189 22.299 10.8969 22.299ZM29.7089 11.115C29.2579 11.115 28.9709 10.814 28.9709 10.391V7.533H26.1269C25.7029 7.533 25.3889 7.246 25.3889 6.809C25.3889 6.357 25.7029 6.07 26.1269 6.07H28.9709V3.227C28.9709 2.803 29.2579 2.502 29.7089 2.502C30.1469 2.502 30.4339 2.803 30.4339 3.227V6.07H33.2769C33.7009 6.07 34.0019 6.357 34.0019 6.809C34.0019 7.246 33.7009 7.533 33.2769 7.533H30.4339V10.391C30.4339 10.814 30.1469 11.115 29.7089 11.115ZM10.1719 26.742C10.1719 27.932 11.1149 28.875 12.3049 28.875C13.4939 28.875 14.4379 27.932 14.4379 26.742C14.4379 25.553 13.4939 24.609 12.3049 24.609C11.1149 24.609 10.1719 25.553 10.1719 26.742ZM22.7229 26.742C22.7229 27.932 23.6799 28.875 24.8689 28.875C26.0589 28.875 27.0019 27.932 27.0019 26.742C27.0019 25.553 26.0589 24.609 24.8689 24.609C23.6799 24.609 22.7229 25.553 22.7229 26.742Z"
            fill={color}
          />
        </svg>
      )
    case "medium":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 37.1328125 29.72265625"
          className={className}
        >
          <path
            d="              M30.0919 14.0685C33.9199 14.0685 37.1329 10.8695 37.1329 7.0275C37.1329 3.1715 33.9469 -0.0005 30.0919 -0.0005C26.2359 -0.0005 23.0649 3.1715 23.0649 7.0275C23.0649 10.8965 26.2359 14.0685 30.0919 14.0685ZM11.1699 22.8865H27.0839C27.7269 22.8865 28.2869 22.3945 28.2869 21.6835C28.2869 20.9725 27.7269 20.4805 27.0839 20.4805H11.4709C10.8009 20.4805 10.4039 20.0015 10.2949 19.3045L10.0759 17.8825H27.1929C28.5879 17.8825 29.5309 17.3085 30.0509 16.2695L30.1599 16.0095C25.0879 15.9555 21.1089 11.9905 21.1089 7.0275C21.1089 6.6175 21.1369 6.1935 21.1909 5.7835H8.3259L8.1069 4.2795C7.9299 3.1035 7.4789 2.5015 5.9609 2.5015H1.2579C0.5879 2.5015 -0.0001 3.0895 -0.0001 3.7875C-0.0001 4.4705 0.5879 5.0585 1.2579 5.0585H5.5649L7.6969 19.5785C7.9979 21.6285 9.0919 22.8865 11.1699 22.8865ZM30.0919 11.4985C29.5309 11.4985 29.1619 11.1155 29.1619 10.5685V7.9705H26.5649C26.0179 7.9705 25.6349 7.6015 25.6349 7.0405C25.6349 6.4665 26.0179 6.0975 26.5649 6.0975H29.1619V3.5135C29.1619 2.9665 29.5309 2.5835 30.0919 2.5835C30.6659 2.5835 31.0219 2.9535 31.0219 3.5135V6.0975H33.6189C34.1799 6.0975 34.5489 6.4665 34.5489 7.0405C34.5489 7.6015 34.1799 7.9705 33.6189 7.9705H31.0219V10.5685C31.0219 11.1155 30.6659 11.4985 30.0919 11.4985ZM9.9119 27.3575C9.9119 28.6695 10.9649 29.7225 12.2769 29.7225C13.6039 29.7225 14.6429 28.6695 14.6429 27.3575C14.6429 26.0315 13.6039 24.9785 12.2769 24.9785C10.9649 24.9785 9.9119 26.0315 9.9119 27.3575ZM22.5449 27.3575C22.5449 28.6695 23.6109 29.7225 24.9239 29.7225C26.2499 29.7225 27.3029 28.6695 27.3029 27.3575C27.3029 26.0315 26.2499 24.9785 24.9239 24.9785C23.6109 24.9785 22.5449 26.0315 22.5449 27.3575Z"
            fill={color}
          />
        </svg>
      )
    case "regular":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 36.818359375 29.271484375"
          className={className}
        >
          <path
            d="              M29.8729 13.8904C33.6329 13.8904 36.8179 10.7324 36.8179 6.9454C36.8179 3.1304 33.6739 0.0004 29.8729 0.0004C26.0589 0.0004 22.9279 3.1304 22.9279 6.9454C22.9279 10.7594 26.0589 13.8904 29.8729 13.8904ZM11.1149 22.6274H27.0699C27.6039 22.6274 28.0679 22.1894 28.0679 21.6014C28.0679 21.0134 27.6039 20.5764 27.0699 20.5764H11.3479C10.5679 20.5764 10.1039 20.0294 9.9669 19.1954L9.7479 17.7594H27.0979C28.5199 17.7594 29.4489 17.1444 29.9279 16.0504L30.0369 15.7634C24.9789 15.7504 21.0409 11.8534 21.0409 6.9454C21.0409 6.5354 21.0679 6.1254 21.1229 5.7144H7.9979L7.7249 3.9784C7.5739 2.9254 7.2049 2.3924 5.8109 2.3924H1.0119C0.4649 2.3924 -0.0001 2.8714 -0.0001 3.4184C-0.0001 3.9784 0.4649 4.4574 1.0119 4.4574H5.6329L7.8199 19.4684C8.1069 21.4104 9.1329 22.6274 11.1149 22.6274ZM29.8729 11.2934C29.3669 11.2934 29.0249 10.9514 29.0249 10.4594V7.7794H26.3589C25.8539 7.7794 25.5249 7.4514 25.5249 6.9454C25.5249 6.4394 25.8539 6.1114 26.3589 6.1114H29.0249V3.4314C29.0249 2.9394 29.3669 2.5974 29.8729 2.5974C30.3789 2.5974 30.7069 2.9394 30.7069 3.4314V6.1114H33.3729C33.8789 6.1114 34.2209 6.4394 34.2209 6.9454C34.2209 7.4514 33.8789 7.7794 33.3729 7.7794H30.7069V10.4594C30.7069 10.9514 30.3789 11.2934 29.8729 11.2934ZM9.9669 27.0564C9.9669 28.3004 10.9509 29.2714 12.1949 29.2714C13.4259 29.2714 14.4099 28.3004 14.4099 27.0564C14.4099 25.8264 13.4259 24.8414 12.1949 24.8414C10.9509 24.8414 9.9669 25.8264 9.9669 27.0564ZM22.7499 27.0564C22.7499 28.3004 23.7479 29.2714 24.9789 29.2714C26.2229 29.2714 27.2069 28.3004 27.2069 27.0564C27.2069 25.8264 26.2229 24.8414 24.9789 24.8414C23.7479 24.8414 22.7499 25.8264 22.7499 27.0564Z"
            fill={color}
          />
        </svg>
      )
    case "semibold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 37.37890625 30.078125"
          className={className}
        >
          <path
            d="              M30.2699 14.2189C34.1389 14.2189 37.3789 10.9789 37.3789 7.0959C37.3789 3.2129 34.1659 -0.0001 30.2699 -0.0001C26.3729 -0.0001 23.1599 3.2129 23.1599 7.0959C23.1599 11.0059 26.3729 14.2189 30.2699 14.2189ZM30.2699 11.6489C29.6679 11.6489 29.2719 11.2519 29.2719 10.6499V8.1069H26.7289C26.1409 8.1069 25.7309 7.7109 25.7309 7.1089C25.7309 6.5079 26.1269 6.0979 26.7289 6.0979H29.2719V3.5819C29.2719 2.9809 29.6679 2.5839 30.2699 2.5839C30.8709 2.5839 31.2679 2.9809 31.2679 3.5819V6.0979H33.8109C34.3989 6.0979 34.8089 6.5079 34.8089 7.1089C34.8089 7.7109 34.3989 8.1069 33.8109 8.1069H31.2679V10.6499C31.2679 11.2519 30.8709 11.6489 30.2699 11.6489ZM11.2109 23.0919H27.0979C27.8089 23.0919 28.4509 22.5449 28.4509 21.7379C28.4509 20.9449 27.8089 20.3989 27.0979 20.3989H11.5659C10.9919 20.3989 10.6369 19.9879 10.5409 19.3729L10.3219 17.9789H27.2479C28.6429 17.9789 29.5999 17.4319 30.1469 16.4339L30.2559 16.2009C25.1699 16.1189 21.1639 12.0859 21.1639 7.0959C21.1639 6.6719 21.1909 6.2479 21.2459 5.8239H8.5859L8.3949 4.4979C8.2029 3.2269 7.6699 2.5839 6.0569 2.5839H1.4629C0.6699 2.5839 -0.0001 3.2539 -0.0001 4.0609C-0.0001 4.8539 0.6699 5.5239 1.4629 5.5239H5.5239L7.5879 19.6599C7.9019 21.7929 9.0509 23.0919 11.2109 23.0919ZM9.8569 27.5899C9.8569 28.9709 10.9649 30.0779 12.3459 30.0779C13.7269 30.0779 14.8339 28.9709 14.8339 27.5899C14.8339 26.2089 13.7269 25.1019 12.3459 25.1019C10.9649 25.1019 9.8569 26.2089 9.8569 27.5899ZM22.3809 27.5899C22.3809 28.9709 23.5019 30.0779 24.8829 30.0779C26.2639 30.0779 27.3709 28.9709 27.3709 27.5899C27.3709 26.2089 26.2639 25.1019 24.8829 25.1019C23.5019 25.1019 22.3809 26.2089 22.3809 27.5899Z"
            fill={color}
          />
        </svg>
      )
    case "thin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 36.080078125 28.328125"
          className={className}
        >
          <path
            d="              M29.4769 13.1929C33.0859 13.1929 36.0799 10.2269 36.0799 6.6039C36.0799 2.9669 33.1129 -0.0001 29.4769 -0.0001C25.8669 -0.0001 22.8869 2.9809 22.8869 6.6039C22.8869 10.2269 25.8669 13.1929 29.4769 13.1929ZM10.6089 21.8339H27.0839C27.3299 21.8339 27.5489 21.6289 27.5489 21.3559C27.5489 21.0819 27.3299 20.8769 27.0839 20.8769H10.8279C9.8569 20.8769 9.2829 20.3169 9.1189 19.2769L8.7639 17.0349H26.7969C28.3419 17.0349 29.0119 16.2559 29.2989 14.8479L29.3809 14.4239C25.1149 14.3559 21.6559 10.8689 21.6559 6.6039C21.6559 6.2619 21.6699 5.9469 21.7109 5.6189H7.0409L6.6309 2.9119C6.5629 2.4339 6.3709 2.1739 5.6739 2.1739H0.4649C0.1909 2.1739 -0.0001 2.3929 -0.0001 2.6519C-0.0001 2.8989 0.1909 3.1309 0.4649 3.1309H5.7009L8.1209 19.4829C8.3399 20.9449 9.1059 21.8339 10.6089 21.8339ZM29.4769 10.8559C29.1069 10.8559 28.8889 10.6089 28.8889 10.2679V7.1919H25.8129C25.4839 7.1919 25.2249 6.9729 25.2249 6.6039C25.2249 6.2339 25.4839 6.0019 25.8129 6.0019H28.8889V2.9399C28.8889 2.6109 29.1069 2.3519 29.4769 2.3519C29.8459 2.3519 30.0779 2.6109 30.0779 2.9399V6.0019H33.1409C33.4819 6.0019 33.7289 6.2339 33.7289 6.6039C33.7289 6.9729 33.4819 7.1919 33.1409 7.1919H30.0779V10.2679C30.0779 10.6089 29.8459 10.8559 29.4769 10.8559ZM10.4319 26.3049C10.4319 27.4399 11.3339 28.3279 12.4549 28.3279C13.5899 28.3279 14.4789 27.4399 14.4789 26.3049C14.4789 25.1699 13.5899 24.2809 12.4549 24.2809C11.3339 24.2809 10.4319 25.1699 10.4319 26.3049ZM22.6679 26.3049C22.6679 27.4399 23.5839 28.3279 24.7189 28.3279C25.8399 28.3279 26.7419 27.4399 26.7419 26.3049C26.7419 25.1699 25.8399 24.2809 24.7189 24.2809C23.5839 24.2809 22.6679 25.1699 22.6679 26.3049Z"
            fill={color}
          />
        </svg>
      )
    case "ultralight":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 35.875 28.0546875"
          className={className}
        >
          <path
            d="              M29.3669 13.0018C32.9219 13.0018 35.8749 10.0758 35.8749 6.4938C35.8749 2.9258 32.9359 -0.0002 29.3669 -0.0002C25.8129 -0.0002 22.8729 2.9398 22.8729 6.4938C22.8729 10.0628 25.8129 13.0018 29.3669 13.0018ZM10.4589 21.6018H27.0839C27.2479 21.6018 27.3849 21.4648 27.3849 21.2738C27.3849 21.0958 27.2479 20.9588 27.0839 20.9588H10.6639C9.6519 20.9588 9.0369 20.3988 8.8589 19.3048L8.4769 16.8168H26.7149C28.2869 16.8168 28.8889 15.9958 29.1069 14.5058L29.1899 14.0278C25.1559 13.9448 21.8339 10.5818 21.8339 6.4938C21.8339 6.1798 21.8479 5.8928 21.8889 5.5918H6.7679L6.3159 2.6118C6.2619 2.2828 6.1249 2.1058 5.6329 2.1058H0.3009C0.1229 2.1058 -0.0001 2.2558 -0.0001 2.4198C-0.0001 2.5838 0.1229 2.7348 0.3009 2.7348H5.7289L8.2169 19.4828C8.4079 20.8088 9.0919 21.6018 10.4589 21.6018ZM29.3669 10.7328C29.0389 10.7328 28.8479 10.5138 28.8479 10.2128V7.0138H25.6489C25.3749 7.0138 25.1289 6.8218 25.1289 6.4938C25.1289 6.1658 25.3749 5.9748 25.6489 5.9748H28.8479V2.7888C28.8479 2.5158 29.0389 2.2698 29.3669 2.2698C29.6949 2.2698 29.8869 2.5158 29.8869 2.7888V5.9748H33.0719C33.3589 5.9748 33.5919 6.1658 33.5919 6.4938C33.5919 6.8218 33.3589 7.0138 33.0719 7.0138H29.8869V10.2128C29.8869 10.5138 29.6949 10.7328 29.3669 10.7328ZM10.5679 26.0858C10.5679 27.1798 11.4429 28.0548 12.5369 28.0548C13.6309 28.0548 14.5059 27.1798 14.5059 26.0858C14.5059 24.9918 13.6309 24.1168 12.5369 24.1168C11.4429 24.1168 10.5679 24.9918 10.5679 26.0858ZM22.6539 26.0858C22.6539 27.1798 23.5429 28.0548 24.6369 28.0548C25.7309 28.0548 26.6059 27.1798 26.6059 26.0858C26.6059 24.9918 25.7309 24.1168 24.6369 24.1168C23.5429 24.1168 22.6539 24.9918 22.6539 26.0858Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}
