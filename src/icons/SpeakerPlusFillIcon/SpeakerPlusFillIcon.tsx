import { IconProps } from "../../types"

export default function SpeakerPlusFillIconIcon({
  weight = "regular",
  color = "#000000",
  className = "",
}: IconProps) {
  switch (weight) {
    case "black":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 35.068359375 26.00390625"
          className={className}
        >
          <path
            d="              M15.9547 26.0044C17.5137 26.0044 18.7027 24.8144 18.7027 23.2554V2.7614C18.7027 1.2034 17.5137 0.0004 15.9547 0.0004C15.0117 0.0004 14.2457 0.3414 13.2617 1.2574L8.0117 6.0974C7.9437 6.1524 7.8887 6.1934 7.8207 6.1934H4.1287C1.4627 6.1934 -0.0003 7.7244 -0.0003 10.4864V15.5174C-0.0003 18.2794 1.4627 19.8244 4.1287 19.8244H7.8067C7.8747 19.8244 7.9297 19.8244 7.9977 19.8794L13.2617 24.7594C14.2047 25.6344 14.9567 26.0044 15.9547 26.0044ZM22.5997 12.9884C22.5997 14.0544 23.3927 14.8754 24.4317 14.8754H26.9477V17.3904C26.9477 18.4294 27.7537 19.2224 28.8337 19.2224C29.9137 19.2224 30.7207 18.4294 30.7207 17.3904V14.8754H33.2367C34.2887 14.8754 35.0687 14.0544 35.0687 12.9884C35.0687 11.9084 34.2887 11.1014 33.2367 11.1014H30.7207V8.5864C30.7207 7.5334 29.9137 6.7544 28.8337 6.7544C27.7537 6.7544 26.9477 7.5334 26.9477 8.5864V11.1014H24.4317C23.3927 11.1014 22.5997 11.9084 22.5997 12.9884Z"
            fill={color}
          />
        </svg>
      )
    case "bold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 34.193359375 25.07421875"
          className={className}
        >
          <path
            d="              M15.3537 25.0745C16.5707 25.0745 17.4997 24.1445 17.4997 22.9275V2.1875C17.4997 0.9705 16.5707 -0.0005 15.3397 -0.0005C14.5467 -0.0005 13.9317 0.3145 13.0977 1.1075L7.5607 6.2615C7.4927 6.3305 7.3967 6.3715 7.3007 6.3715H3.4867C1.2307 6.3715 -0.0003 7.6565 -0.0003 10.0215V15.0805C-0.0003 17.4455 1.2307 18.7165 3.4867 18.7165H7.2867C7.3967 18.7165 7.4787 18.7445 7.5607 18.8125L13.0977 24.0075C13.8907 24.7465 14.5337 25.0745 15.3537 25.0745ZM21.6287 12.5235C21.6287 13.3985 22.2577 14.0275 23.1327 14.0275H26.4007V17.3085C26.4007 18.1695 27.0297 18.7985 27.9047 18.7985C28.7797 18.7985 29.4217 18.1695 29.4217 17.3085V14.0275H32.7027C33.5647 14.0275 34.1937 13.3985 34.1937 12.5235C34.1937 11.6345 33.5647 10.9925 32.7027 10.9925H29.4217V7.7245C29.4217 6.8495 28.7797 6.2345 27.9047 6.2345C27.0297 6.2345 26.4007 6.8495 26.4007 7.7245V10.9925H23.1327C22.2577 10.9925 21.6287 11.6345 21.6287 12.5235Z"
            fill={color}
          />
        </svg>
      )
    case "heavy":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 34.658203125 25.56640625"
          className={className}
        >
          <path
            d="              M15.6677 25.5666C17.0627 25.5666 18.1427 24.4996 18.1427 23.1056V2.4886C18.1427 1.0936 17.0627 -0.0004 15.6677 -0.0004C14.7927 -0.0004 14.0957 0.3276 13.1797 1.1896L7.8067 6.1796C7.7247 6.2346 7.6567 6.2756 7.5747 6.2756H3.8277C1.3537 6.2756 -0.0003 7.6976 -0.0003 10.2676V15.3126C-0.0003 17.8826 1.3537 19.3046 3.8277 19.3046H7.5607C7.6427 19.3046 7.7247 19.3186 7.7927 19.3726L13.1797 24.4046C14.0547 25.2106 14.7517 25.5666 15.6677 25.5666ZM22.1487 12.7696C22.1487 13.7406 22.8597 14.4786 23.8167 14.4786H26.6877V17.3496C26.6877 18.3066 27.4117 19.0176 28.3967 19.0176C29.3807 19.0176 30.1187 18.3066 30.1187 17.3496V14.4786H32.9907C33.9477 14.4786 34.6587 13.7406 34.6587 12.7696C34.6587 11.7856 33.9477 11.0466 32.9907 11.0466H30.1187V8.1756C30.1187 7.2186 29.3807 6.5076 28.3967 6.5076C27.4117 6.5076 26.6877 7.2186 26.6877 8.1756V11.0466H23.8167C22.8457 11.0466 22.1487 11.7856 22.1487 12.7696Z"
            fill={color}
          />
        </svg>
      )
    case "light":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32.51171875 23.611328125"
          className={className}
        >
          <path
            d="              M14.5467 23.6109C15.3127 23.6109 15.8317 23.0509 15.8317 22.2849V1.3809C15.8317 0.6149 15.3127 -0.0001 14.5197 -0.0001C13.9727 -0.0001 13.5767 0.2459 13.0427 0.7659L7.0687 6.4529C6.9587 6.5629 6.8227 6.6039 6.6447 6.6039H2.5707C0.9707 6.6039 -0.0003 7.5879 -0.0003 9.2699V14.4239C-0.0003 16.1059 0.9707 17.0899 2.5707 17.0899H6.6447C6.8227 17.0899 6.9587 17.1309 7.0687 17.2399L13.0427 22.8999C13.5347 23.3789 13.9997 23.6109 14.5467 23.6109ZM20.0977 11.7989C20.0977 12.2909 20.4667 12.6599 20.9867 12.6599H25.4157V17.1039C25.4157 17.6229 25.7847 17.9919 26.2907 17.9919C26.8107 17.9919 27.1797 17.6229 27.1797 17.1039V12.6599H31.6227C32.1427 12.6599 32.5117 12.2909 32.5117 11.7989C32.5117 11.2659 32.1567 10.8969 31.6227 10.8969H27.1797V6.4669C27.1797 5.9339 26.8107 5.5649 26.2907 5.5649C25.7847 5.5649 25.4157 5.9469 25.4157 6.4669V10.8969H20.9867C20.4527 10.8969 20.0977 11.2659 20.0977 11.7989Z"
            fill={color}
          />
        </svg>
      )
    case "medium":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 33.6328125 24.458984375"
          className={className}
        >
          <path
            d="              M14.9567 24.4588C15.9687 24.4588 16.7207 23.7208 16.7207 22.7087V1.8317C16.7207 0.8208 15.9687 -0.0003 14.9297 -0.0003C14.2457 -0.0003 13.7407 0.2868 13.0017 0.9978L7.2737 6.3707C7.1917 6.4398 7.0817 6.4808 6.9587 6.4808H3.0897C1.0797 6.4808 -0.0003 7.5878 -0.0003 9.7068V14.7928C-0.0003 16.8988 1.0797 18.0198 3.0897 18.0198H6.9587C7.0817 18.0198 7.1917 18.0468 7.2737 18.1288L13.0017 23.5298C13.6857 24.1858 14.2597 24.4588 14.9567 24.4588ZM20.9997 12.2228C20.9997 12.9608 21.5337 13.4808 22.2847 13.4808H26.0447V17.2398C26.0447 17.9918 26.5647 18.5258 27.3027 18.5258C28.0687 18.5258 28.6017 17.9918 28.6017 17.2398V13.4808H32.3617C33.1137 13.4808 33.6327 12.9608 33.6327 12.2228C33.6327 11.4568 33.1137 10.9238 32.3617 10.9238H28.6017V7.1778C28.6017 6.4117 28.0687 5.8927 27.3027 5.8927C26.5647 5.8927 26.0447 6.4117 26.0447 7.1778V10.9238H22.2847C21.5337 10.9238 20.9997 11.4568 20.9997 12.2228Z"
            fill={color}
          />
        </svg>
      )
    case "regular":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 33.318359375 24.1171875"
          className={className}
        >
          <path
            d="              M14.7387 24.117C15.6407 24.117 16.2837 23.475 16.2837 22.586V1.613C16.2837 0.725 15.6407 0 14.7107 0C14.0687 0 13.6307 0.273 12.9477 0.943L7.1097 6.412C7.0277 6.494 6.9047 6.535 6.7677 6.535H2.8577C0.9977 6.535 -0.0003 7.561 -0.0003 9.529V14.615C-0.0003 16.598 0.9977 17.609 2.8577 17.609H6.7677C6.9047 17.609 7.0277 17.65 7.1097 17.732L12.9477 23.256C13.5627 23.857 14.0957 24.117 14.7387 24.117ZM20.6447 12.045C20.6447 12.715 21.1227 13.166 21.8207 13.166H25.8397V17.199C25.8397 17.883 26.3047 18.361 26.9747 18.361C27.6587 18.361 28.1367 17.896 28.1367 17.199V13.166H32.1697C32.8537 13.166 33.3187 12.715 33.3187 12.045C33.3187 11.361 32.8537 10.883 32.1697 10.883H28.1367V6.863C28.1367 6.166 27.6587 5.687 26.9747 5.687C26.3047 5.687 25.8397 6.166 25.8397 6.863V10.883H21.8207C21.1227 10.883 20.6447 11.361 20.6447 12.045Z"
            fill={color}
          />
        </svg>
      )
    case "semibold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 33.87890625 24.71875"
          className={className}
        >
          <path
            d="              M15.1207 24.7188C16.2287 24.7188 17.0487 23.8988 17.0487 22.7908V1.9828C17.0487 0.8748 16.2287 -0.0002 15.1077 -0.0002C14.3687 -0.0002 13.8227 0.3008 13.0427 1.0388L7.3967 6.3168C7.3147 6.3848 7.2187 6.4258 7.1097 6.4258H3.2677C1.1487 6.4258 -0.0003 7.6148 -0.0003 9.8438V14.9028C-0.0003 17.1308 1.1487 18.3068 3.2677 18.3068H7.0957C7.2187 18.3068 7.3147 18.3478 7.3967 18.4158L13.0427 23.7348C13.7677 24.4178 14.3687 24.7188 15.1207 24.7188ZM21.2737 12.3458C21.2737 13.1388 21.8477 13.7128 22.6547 13.7128H26.1957V17.2678C26.1957 18.0608 26.7697 18.6348 27.5627 18.6348C28.3687 18.6348 28.9567 18.0608 28.9567 17.2678V13.7128H32.5117C33.3047 13.7128 33.8787 13.1388 33.8787 12.3458C33.8787 11.5388 33.3047 10.9508 32.5117 10.9508H28.9567V7.4098C28.9567 6.6038 28.3687 6.0288 27.5627 6.0288C26.7697 6.0288 26.1957 6.6038 26.1957 7.4098V10.9508H22.6547C21.8337 10.9508 21.2737 11.5388 21.2737 12.3458Z"
            fill={color}
          />
        </svg>
      )
    case "thin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 31.4453125 22.94140625"
          className={className}
        >
          <path
            d="              M14.2737 22.9418C14.8887 22.9418 15.2307 22.4898 15.2307 21.9028V1.0668C15.2307 0.4788 14.8887 -0.0002 14.2737 -0.0002C13.8497 -0.0002 13.5077 0.2188 13.1657 0.5468L6.9997 6.5078C6.8637 6.6308 6.6997 6.6858 6.4807 6.6858H2.2017C0.9297 6.6858 -0.0003 7.6148 -0.0003 8.9138V14.1778C-0.0003 15.4628 0.9297 16.3928 2.2017 16.3928H6.4807C6.6997 16.3928 6.8637 16.4468 6.9997 16.5838L13.1657 22.4078C13.4937 22.7368 13.8497 22.9418 14.2737 22.9418ZM19.3597 11.4708C19.3597 11.7438 19.5917 11.9768 19.8927 11.9768H24.8687V16.9668C24.8687 17.2538 25.1017 17.4998 25.3887 17.4998C25.6897 17.4998 25.9357 17.2678 25.9357 16.9668V11.9768H30.9117C31.2127 11.9768 31.4457 11.7438 31.4457 11.4708C31.4457 11.1558 31.2267 10.9238 30.9117 10.9238H25.9357V5.9468C25.9357 5.6328 25.6897 5.4008 25.3887 5.4008C25.1017 5.4008 24.8687 5.6468 24.8687 5.9468V10.9238H19.8927C19.5777 10.9238 19.3597 11.1558 19.3597 11.4708Z"
            fill={color}
          />
        </svg>
      )
    case "ultralight":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 30.8984375 22.5859375"
          className={className}
        >
          <path
            d="              M14.1367 22.5861C14.6697 22.5861 14.9297 22.1891 14.9297 21.6841V0.8891C14.9297 0.3961 14.6697 0.0001 14.1367 0.0001C13.7817 0.0001 13.4667 0.1911 13.2347 0.4241L6.9587 6.5211C6.8227 6.6721 6.6447 6.7131 6.3987 6.7131H2.0097C0.9027 6.7131 -0.0003 7.6291 -0.0003 8.7231V14.0271C-0.0003 15.1211 0.9027 16.0231 2.0097 16.0231H6.3987C6.6447 16.0231 6.8227 16.0921 6.9587 16.2281L13.2347 22.1621C13.4667 22.3941 13.7817 22.5861 14.1367 22.5861ZM18.9767 11.2931C18.9767 11.4571 19.1407 11.6211 19.3317 11.6211H24.5817V16.8851C24.5817 17.0621 24.7597 17.2401 24.9237 17.2401C25.1287 17.2401 25.2927 17.0901 25.2927 16.8851V11.6211H30.5427C30.7347 11.6211 30.8987 11.4571 30.8987 11.2931C30.8987 11.0881 30.7477 10.9241 30.5427 10.9241H25.2927V5.6601C25.2927 5.4691 25.1287 5.3181 24.9237 5.3181C24.7597 5.3181 24.5817 5.4821 24.5817 5.6601V10.9241H19.3317C19.1267 10.9241 18.9767 11.0881 18.9767 11.2931Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}