import { IconProps } from "../../types"

export default function RectangleOnRectangleSquareIconIcon({
  weight = "regular",
  color = "#000000",
  className = "",
}: IconProps) {
  switch (weight) {
    case "black":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 27.111328125 27.111328125"
          className={className}
        >
          <path
            d="              M5.3597 27.1109H21.7517C25.1287 27.1109 27.1117 25.1289 27.1117 21.7519V5.3599C27.1117 1.9829 25.1287 -0.0001 21.7517 -0.0001H5.3597C1.9827 -0.0001 -0.0003 1.9829 -0.0003 5.3599V21.7519C-0.0003 25.1289 1.9827 27.1109 5.3597 27.1109ZM6.0977 22.2579C5.2637 22.2579 4.8537 21.9159 4.8537 20.9999V6.1109C4.8537 5.1949 5.2637 4.8539 6.0977 4.8539H21.0137C21.8477 4.8539 22.2577 5.1949 22.2577 6.1109V20.9999C22.2577 21.9159 21.8477 22.2579 21.0137 22.2579ZM8.3947 12.0589C8.3947 10.2809 9.4067 9.2699 11.1697 9.2699H17.8007V9.2559C17.8007 8.1899 17.0897 7.4789 15.8457 7.4789H8.4357C7.1917 7.4789 6.4807 8.1899 6.4807 9.4339V14.8609C6.4807 16.1059 7.1917 16.8169 8.3537 16.8169H8.3947ZM11.2797 19.5509H18.6897C19.9337 19.5509 20.6447 18.8399 20.6447 17.5959V12.1539C20.6447 10.9099 19.9337 10.1989 18.6897 10.1989H11.2797C10.0347 10.1989 9.3247 10.9099 9.3247 12.1539V17.5959C9.3247 18.8399 10.0347 19.5509 11.2797 19.5509Z"
            fill={color}
          />
        </svg>
      )
    case "bold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 26.140625 26.140625"
          className={className}
        >
          <path
            d="              M4.8267 26.1407H21.3147C24.4457 26.1407 26.1407 24.4457 26.1407 21.3417V4.7987C26.1407 1.6957 24.4457 -0.0003 21.3147 -0.0003H4.8267C1.7087 -0.0003 -0.0003 1.6957 -0.0003 4.7987V21.3417C-0.0003 24.4457 1.7087 26.1407 4.8267 26.1407ZM5.2087 22.6137C4.1157 22.6137 3.5277 22.0667 3.5277 20.9047V5.2227C3.5277 4.0607 4.1157 3.5277 5.2087 3.5277H20.9317C22.0257 3.5277 22.6137 4.0607 22.6137 5.2227V20.9047C22.6137 22.0667 22.0257 22.6137 20.9317 22.6137ZM7.6017 11.3207C7.6017 9.5837 8.5587 8.6267 10.2947 8.6267H17.6637V8.5587C17.6637 7.3967 16.9937 6.7267 15.7497 6.7267H7.4787C6.2347 6.7267 5.5647 7.3967 5.5647 8.6407V14.5337C5.5647 15.7637 6.2347 16.4337 7.4377 16.4337H7.6017ZM10.4047 19.2367H18.6617C19.9197 19.2367 20.5897 18.5797 20.5897 17.3227V11.4157C20.5897 10.1857 19.9197 9.5157 18.6617 9.5157H10.4047C9.1467 9.5157 8.4767 10.1857 8.4767 11.4157V17.3227C8.4767 18.5797 9.1467 19.2367 10.4047 19.2367Z"
            fill={color}
          />
        </svg>
      )
    case "heavy":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 26.66015625 26.646484375"
          className={className}
        >
          <path
            d="              M5.1137 26.6464H21.5467C24.8007 26.6464 26.6597 24.8004 26.6597 21.5604V5.0994C26.6597 1.8454 24.8007 0.0004 21.5467 0.0004H5.1137C1.8597 0.0004 -0.0003 1.8454 -0.0003 5.0994V21.5604C-0.0003 24.8144 1.8597 26.6464 5.1137 26.6464ZM5.6877 22.4214C4.7167 22.4214 4.2247 21.9844 4.2247 20.9594V5.6874C4.2247 4.6624 4.7167 4.2244 5.6877 4.2244H20.9727C21.9297 4.2244 22.4217 4.6624 22.4217 5.6874V20.9594C22.4217 21.9844 21.9297 22.4214 20.9727 22.4214ZM8.0257 11.7034C8.0257 9.9534 9.0097 8.9684 10.7597 8.9684H17.7327V8.9274C17.7327 7.8204 17.0487 7.1234 15.7907 7.1234H7.9847C6.7407 7.1234 6.0427 7.8204 6.0427 9.0644V14.7104C6.0427 15.9414 6.7407 16.6384 7.9297 16.6384H8.0257ZM10.8687 19.4004H18.6757C19.9197 19.4004 20.6177 18.7164 20.6177 17.4724V11.7984C20.6177 10.5684 19.9197 9.8714 18.6757 9.8714H10.8687C9.6247 9.8714 8.9277 10.5684 8.9277 11.7984V17.4724C8.9277 18.7164 9.6247 19.4004 10.8687 19.4004Z"
            fill={color}
          />
        </svg>
      )
    case "light":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24.759765625 24.759765625"
          className={className}
        >
          <path
            d="              M4.0337 24.7594H20.7267C23.3927 24.7594 24.7597 23.3924 24.7597 20.7534V3.9924C24.7597 1.3674 23.3927 0.0004 20.7267 0.0004H4.0337C1.3677 0.0004 -0.0003 1.3534 -0.0003 3.9924V20.7534C-0.0003 23.4064 1.3677 24.7594 4.0337 24.7594ZM4.0607 23.0644C2.5297 23.0644 1.6957 22.2444 1.6957 20.6714V4.0874C1.6957 2.5024 2.5297 1.6954 4.0607 1.6954H20.6857C22.2027 1.6954 23.0647 2.5024 23.0647 4.0874V20.6714C23.0647 22.2444 22.2027 23.0644 20.6857 23.0644ZM6.6717 10.3084C6.6717 8.7364 7.5057 7.9024 9.0917 7.9024L17.3767 7.9164V7.6284C17.3767 6.4534 16.7887 5.8514 15.5997 5.8514H6.2067C5.0177 5.8514 4.4157 6.4394 4.4157 7.6284V14.0954C4.4157 15.2574 5.0177 15.8594 6.2067 15.8594H6.6717ZM9.1597 18.6624H18.5527C19.7287 18.6624 20.3297 18.0744 20.3297 16.8844V10.3774C20.3297 9.2144 19.7287 8.6134 18.5527 8.6134H9.1597C7.9707 8.6134 7.3687 9.2144 7.3687 10.3774V16.8844C7.3687 18.0744 7.9707 18.6624 9.1597 18.6624Z"
            fill={color}
          />
        </svg>
      )
    case "medium":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 25.525390625 25.51171875"
          className={className}
        >
          <path
            d="              M4.4847 25.5122H21.0407C23.9937 25.5122 25.5257 23.9942 25.5257 21.0822V4.4292C25.5257 1.5172 23.9937 0.0002 21.0407 0.0002H4.4847C1.5317 0.0002 -0.0003 1.5042 -0.0003 4.4292V21.0822C-0.0003 23.9942 1.5317 25.5122 4.4847 25.5122ZM4.6487 22.8322C3.3767 22.8322 2.6797 22.1762 2.6797 20.8492V4.6622C2.6797 3.3362 3.3767 2.6662 4.6487 2.6662H20.8767C22.1347 2.6662 22.8457 3.3362 22.8457 4.6622V20.8492C22.8457 22.1762 22.1347 22.8322 20.8767 22.8322ZM7.0957 10.8422C7.0957 9.1332 8.0117 8.2172 9.7477 8.2172L17.5817 8.2302V8.1072C17.5817 6.8902 16.9397 6.2482 15.6817 6.2482H6.8637C5.6057 6.2482 4.9627 6.8772 4.9627 8.1352V14.3142C4.9627 15.5452 5.6057 16.1742 6.8497 16.1742H7.0957ZM9.8297 19.0452H18.6617C19.9067 19.0452 20.5487 18.4162 20.5487 17.1582V10.9372C20.5487 9.7072 19.9067 9.0642 18.6617 9.0642H9.8297C8.5727 9.0642 7.9437 9.7072 7.9437 10.9372V17.1582C7.9437 18.4162 8.5727 19.0452 9.8297 19.0452Z"
            fill={color}
          />
        </svg>
      )
    case "regular":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 25.169921875 25.169921875"
          className={className}
        >
          <path
            d="              M4.2927 25.1702H20.8767C23.7477 25.1702 25.1697 23.7622 25.1697 20.9452V4.2382C25.1697 1.4222 23.7477 0.0002 20.8767 0.0002H4.2927C1.4357 0.0002 -0.0003 1.4222 -0.0003 4.2382V20.9452C-0.0003 23.7622 1.4357 25.1702 4.2927 25.1702ZM4.3207 22.9692C2.9527 22.9692 2.2017 22.2442 2.2017 20.8222V4.3612C2.2017 2.9392 2.9527 2.2012 4.3207 2.2012H20.8497C22.2027 2.2012 22.9687 2.9392 22.9687 4.3612V20.8222C22.9687 22.2442 22.2027 22.9692 20.8497 22.9692ZM6.8227 10.5962C6.8227 8.9002 7.7107 7.9982 9.4337 7.9982L17.5277 8.0122V7.8612C17.5277 6.6172 16.9117 5.9882 15.6547 5.9882H6.5077C5.2637 5.9882 4.6347 6.6032 4.6347 7.8612V14.2052C4.6347 15.4352 5.2637 16.0512 6.5077 16.0512H6.8227ZM9.5157 18.9352H18.6487C19.9067 18.9352 20.5347 18.3342 20.5347 17.0762V10.6782C20.5347 9.4612 19.9067 8.8322 18.6487 8.8322H9.5157C8.2577 8.8322 7.6287 9.4612 7.6287 10.6782V17.0762C7.6287 18.3342 8.2577 18.9352 9.5157 18.9352Z"
            fill={color}
          />
        </svg>
      )
    case "semibold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 25.78515625 25.78515625"
          className={className}
        >
          <path
            d="              M4.6347 25.7849H21.1507C24.1857 25.7849 25.7847 24.1859 25.7847 21.1909V4.5939C25.7847 1.5999 24.1857 -0.0001 21.1507 -0.0001H4.6347C1.6137 -0.0001 -0.0003 1.5859 -0.0003 4.5939V21.1909C-0.0003 24.1859 1.6137 25.7849 4.6347 25.7849ZM4.8947 22.7359C3.6917 22.7359 3.0487 22.1349 3.0487 20.8769V4.9079C3.0487 3.6499 3.6917 3.0349 4.8947 3.0349H20.9047C22.0797 3.0349 22.7497 3.6499 22.7497 4.9079V20.8769C22.7497 22.1349 22.0797 22.7359 20.9047 22.7359ZM7.3147 11.0469C7.3147 9.3379 8.2437 8.3949 9.9807 8.3949H17.6097V8.2989C17.6097 7.1089 16.9667 6.4669 15.7087 6.4669H7.1227C5.8787 6.4669 5.2227 7.1089 5.2227 8.3539V14.4099C5.2227 15.6409 5.8787 16.2829 7.0957 16.2829H7.3147ZM10.0767 19.1269H18.6617C19.9067 19.1269 20.5627 18.4839 20.5627 17.2269V11.1429C20.5627 9.9119 19.9067 9.2559 18.6617 9.2559H10.0767C8.8187 9.2559 8.1757 9.9119 8.1757 11.1429V17.2269C8.1757 18.4839 8.8187 19.1269 10.0767 19.1269Z"
            fill={color}
          />
        </svg>
      )
    case "thin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24.19921875 24.19921875"
          className={className}
        >
          <path
            d="              M3.6917 24.1993H20.5217C22.9417 24.1993 24.1997 22.9003 24.1997 20.5213V3.6643C24.1997 1.2853 22.9417 0.0003 20.5217 0.0003H3.6917C1.2717 0.0003 -0.0003 1.2583 -0.0003 3.6643V20.5213C-0.0003 22.9413 1.2717 24.1993 3.6917 24.1993ZM3.7187 23.1873C1.9417 23.1873 1.0117 22.2583 1.0117 20.4663V3.7183C1.0117 1.9413 1.9417 1.0113 3.7187 1.0113H20.4807C22.2027 1.0113 23.1877 1.9413 23.1877 3.7183V20.4663C23.1877 22.2583 22.2027 23.1873 20.4807 23.1873ZM6.4807 9.9393C6.4807 8.5173 7.2187 7.7653 8.6267 7.7653L17.1857 7.7793V7.3143C17.1857 6.2343 16.6247 5.6463 15.5177 5.6463H5.7967C4.7167 5.6463 4.1427 6.2203 4.1427 7.3143V13.9593C4.1427 15.0393 4.7167 15.6273 5.7967 15.6273H6.4807ZM8.6957 18.2933H18.4157C19.5097 18.2933 20.0707 17.7323 20.0707 16.6383V9.9663C20.0707 8.9003 19.5097 8.3123 18.4157 8.3123H8.6957C7.5877 8.3123 7.0277 8.9003 7.0277 9.9663V16.6383C7.0277 17.7323 7.5877 18.2933 8.6957 18.2933Z"
            fill={color}
          />
        </svg>
      )
    case "ultralight":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 23.92578125 23.92578125"
          className={className}
        >
          <path
            d="              M3.5137 23.9256H20.4117C22.6957 23.9256 23.9257 22.6676 23.9257 20.4126V3.5136C23.9257 1.2576 22.6957 -0.0004 20.4117 -0.0004H3.5137C1.2167 -0.0004 -0.0003 1.2166 -0.0003 3.5136V20.4126C-0.0003 22.7086 1.2167 23.9256 3.5137 23.9256ZM3.5407 23.2556C1.6547 23.2556 0.6697 22.2716 0.6697 20.3716V3.5406C0.6697 1.6546 1.6547 0.6696 3.5407 0.6696H20.3707C22.2027 0.6696 23.2557 1.6546 23.2557 3.5406V20.3716C23.2557 22.2716 22.2027 23.2556 20.3707 23.2556ZM6.3847 9.7616C6.3847 8.4216 7.0817 7.7106 8.3947 7.7106L17.0897 7.7246V7.1636C17.0897 6.1386 16.5427 5.5646 15.4907 5.5646H5.5917C4.5527 5.5646 3.9927 6.1246 3.9927 7.1636V13.9046C3.9927 14.9296 4.5527 15.5036 5.5917 15.5036H6.3847ZM8.4497 18.1156H18.3477C19.3867 18.1156 19.9477 17.5546 19.9477 16.5156V9.7756C19.9477 8.7496 19.3867 8.1756 18.3477 8.1756H8.4497C7.3967 8.1756 6.8497 8.7496 6.8497 9.7756V16.5156C6.8497 17.5546 7.3967 18.1156 8.4497 18.1156Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}