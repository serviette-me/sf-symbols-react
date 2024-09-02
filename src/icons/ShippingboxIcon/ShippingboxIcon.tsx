import { IconProps } from "../../types"

export default function ShippingboxIconIcon({
  weight = "regular",
  color = "#000000",
  className = "",
}: IconProps) {
  switch (weight) {
    case "black":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 28.943359375 30.9326171875"
          className={className}
        >
          <path
            d="              M2.2017 24.8557L13.3167 30.6657C13.9867 31.0217 14.9437 31.0217 15.6267 30.6657L26.7287 24.8557C28.3147 24.0217 28.9437 23.0367 28.9437 21.2187V9.1597C28.9437 7.5327 28.3147 6.4527 26.7837 5.6467L17.4727 0.7387C15.6137 -0.2463 13.3297 -0.2463 11.4707 0.7387L2.1597 5.6467C0.6287 6.4527 -0.0003 7.5327 -0.0003 9.1597V21.2187C-0.0003 23.0367 0.6287 24.0217 2.2017 24.8557ZM20.8087 9.1737L12.7287 4.9077L13.3437 4.5797C14.0687 4.2107 14.8477 4.1837 15.5857 4.5797L22.5727 8.2437ZM14.4647 12.5237L6.3707 8.2437L8.3267 7.2187L16.4747 11.4567ZM4.8127 21.4097C4.2657 21.1097 4.0467 20.7677 4.0467 20.2067V11.8397L12.3457 16.2147V25.4707ZM24.1177 21.4097L16.5837 25.4707V16.2147L24.8967 11.8397V20.2067C24.8967 20.7677 24.6777 21.1097 24.1177 21.4097Z"
            fill={color}
          />
        </svg>
      )
    case "bold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 28.2734375 30.37890625"
          className={className}
        >
          <path
            d="              M2.0647 24.1346L12.9887 30.0816C13.7127 30.4776 14.5607 30.4776 15.2847 30.0816L26.2087 24.1346C27.6307 23.3546 28.2737 22.5076 28.2737 20.6066V9.1776C28.2737 7.6456 27.6997 6.6616 26.3597 5.9366L16.8577 0.7276C15.1077 -0.2424 13.1657 -0.2424 11.4157 0.7276L1.9137 5.9366C0.5747 6.6616 -0.0003 7.6456 -0.0003 9.1776V20.6066C-0.0003 22.5076 0.6427 23.3546 2.0647 24.1346ZM20.5217 9.6696L11.1837 4.5286L12.7967 3.6266C13.6997 3.1346 14.5747 3.1206 15.4767 3.6266L23.4607 8.0286ZM14.1367 13.1556L4.8127 8.0286L7.9027 6.3066L17.2537 11.4326ZM3.9787 21.5096C3.3087 21.1266 3.0627 20.7296 3.0627 20.0736V10.7356L12.5367 15.9586V26.2666ZM24.2947 21.5096L15.7367 26.2666V15.9586L25.2107 10.7356V20.0736C25.2107 20.7296 24.9647 21.1266 24.2947 21.5096Z"
            fill={color}
          />
        </svg>
      )
    case "heavy":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 28.62890625 30.66943359375"
          className={className}
        >
          <path
            d="              M2.1327 24.5136L13.1657 30.3926C13.8637 30.7616 14.7657 30.7616 15.4627 30.3926L26.4827 24.5136C27.9867 23.7066 28.6287 22.7776 28.6287 20.9316V9.1736C28.6287 7.5876 28.0277 6.5486 26.5777 5.7836L17.1857 0.7386C15.3807 -0.2464 13.2477 -0.2464 11.4437 0.7386L2.0507 5.7836C0.6017 6.5486 -0.0003 7.5876 -0.0003 9.1736V20.9316C-0.0003 22.7776 0.6287 23.7066 2.1327 24.5136ZM20.6717 9.4066L12.0037 4.7306L13.0837 4.1286C13.8907 3.7046 14.7107 3.6916 15.5317 4.1286L22.9957 8.1486ZM14.3147 12.8246L5.6327 8.1486L8.1347 6.7816L16.8437 11.4436ZM4.4157 21.4516C3.8147 21.1226 3.5817 20.7406 3.5817 20.1386V11.3206L12.4417 16.0916V25.8396ZM24.1997 21.4516L16.1877 25.8396V16.0916L25.0467 11.3206V20.1386C25.0467 20.7406 24.8147 21.1226 24.1997 21.4516Z"
            fill={color}
          />
        </svg>
      )
    case "light":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 27.31640625 29.3193359375"
          className={className}
        >
          <path
            d="              M1.6817 22.9109L12.6057 29.0219C13.3167 29.4189 13.9867 29.4189 14.6977 29.0219L25.6347 22.9109C26.7697 22.2679 27.3167 21.5979 27.3167 19.9709V8.6919C27.3167 7.5709 26.8517 6.8459 25.9357 6.3269L15.7227 0.5849C14.3557 -0.1951 12.9607 -0.1951 11.5937 0.5849L1.3807 6.3269C0.4517 6.8459 -0.0003 7.5709 -0.0003 8.6919V19.9709C-0.0003 21.5979 0.5467 22.2679 1.6817 22.9109ZM20.1937 10.2099L8.9547 3.9619L12.3727 2.0469C13.2477 1.5549 14.0687 1.5419 14.9437 2.0469L24.8417 7.6259ZM13.6587 13.8459L2.4607 7.6259L7.2867 4.9049L18.4977 11.1529ZM2.7067 21.5709C1.8597 21.1059 1.6407 20.6689 1.6407 19.9029V9.0609L12.8247 15.3229V27.2039ZM24.6097 21.5709L14.4927 27.2039V15.3229L25.6757 9.0609V19.9029C25.6757 20.6689 25.4567 21.1059 24.6097 21.5709Z"
            fill={color}
          />
        </svg>
      )
    case "medium":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 27.849609375 30.02001953125"
          className={className}
        >
          <path
            d="              M1.9687 23.6589L12.7837 29.7019C13.5347 30.1259 14.3007 30.1259 15.0667 29.7019L25.8807 23.6589C27.1937 22.9209 27.8497 22.1549 27.8497 20.2139V9.1669C27.8497 7.7179 27.3027 6.7879 26.0857 6.1049L16.4747 0.7179C14.7927 -0.2391 13.0567 -0.2391 11.3747 0.7179L1.7637 6.1049C0.5467 6.7879 -0.0003 7.7179 -0.0003 9.1669V20.2139C-0.0003 22.1549 0.6567 22.9209 1.9687 23.6589ZM20.3297 9.9739L10.1857 4.2859L12.4547 3.0149C13.4527 2.4539 14.3967 2.4399 15.3947 3.0149L24.0347 7.8819ZM13.9177 13.5559L3.8147 7.8819L7.6287 5.7219L17.7597 11.3959ZM3.4457 21.5539C2.6937 21.1439 2.4337 20.7059 2.4337 19.9809V10.0149L12.6597 15.7839V26.7629ZM24.4047 21.5539L15.1897 26.7629V15.7839L25.4157 10.0149V19.9809C25.4157 20.7059 25.1567 21.1439 24.4047 21.5539Z"
            fill={color}
          />
        </svg>
      )
    case "regular":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 27.603515625 29.81494140625"
          className={className}
        >
          <path
            d="              M1.9137 23.3893L12.6737 29.4873C13.4397 29.9243 14.1637 29.9243 14.9437 29.4873L25.6897 23.3893C26.9477 22.6783 27.6037 21.9533 27.6037 19.9983V9.1703C27.6037 7.7483 27.0837 6.8603 25.9357 6.2033L16.2557 0.7073C14.6017 -0.2357 13.0017 -0.2357 11.3477 0.7073L1.6817 6.2033C0.5197 6.8603 -0.0003 7.7483 -0.0003 9.1703V19.9983C-0.0003 21.9533 0.6697 22.6783 1.9137 23.3893ZM20.2347 10.1413L9.6387 4.1533L12.2637 2.6623C13.3167 2.0613 14.2867 2.0473 15.3537 2.6623L24.3637 7.8033ZM13.8087 13.7783L3.2537 7.8033L7.4787 5.3833L18.0337 11.3853ZM3.1447 21.5843C2.3517 21.1473 2.0777 20.6823 2.0777 19.9303V9.6083L12.7287 15.6923V27.0393ZM24.4727 21.5843L14.8747 27.0393V15.6923L25.5257 9.6083V19.9303C25.5257 20.6823 25.2517 21.1473 24.4727 21.5843Z"
            fill={color}
          />
        </svg>
      )
    case "semibold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 28.02734375 30.173828125"
          className={className}
        >
          <path
            d="              M2.0097 23.864L12.8787 29.866C13.6177 30.276 14.4097 30.276 15.1617 29.866L26.0177 23.864C27.3847 23.112 28.0277 22.306 28.0277 20.392V9.167C28.0277 7.69 27.4807 6.733 26.1957 6.036L16.6387 0.718C14.9297 -0.239 13.0977 -0.239 11.3887 0.718L1.8317 6.036C0.5607 6.733 -0.0003 7.69 -0.0003 9.167V20.392C-0.0003 22.306 0.6567 23.112 2.0097 23.864ZM20.4117 9.837L10.6227 4.396L12.6057 3.288C13.5627 2.741 14.4647 2.728 15.4217 3.288L23.7887 7.95ZM14.0137 13.378L4.2387 7.95L7.7517 5.968L17.5407 11.409ZM3.6777 21.54C2.9527 21.144 2.7067 20.72 2.7067 20.022V10.329L12.6057 15.866V26.544ZM24.3637 21.54L15.4217 26.544V15.866L25.3337 10.329V20.022C25.3337 20.72 25.0747 21.144 24.3637 21.54Z"
            fill={color}
          />
        </svg>
      )
    case "thin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 26.919921875 28.65456614291901"
          className={className}
        >
          <path
            d="              M1.3677 22.2678L12.5367 28.3928C13.1657 28.7348 13.7407 28.7488 14.3827 28.3928L25.5527 22.2678C26.5507 21.7208 26.9197 21.1328 26.9197 19.9438V8.0488C26.9197 7.3248 26.5507 6.8328 25.9357 6.4908L15.0117 0.4208C14.0137 -0.1402 12.9067 -0.1402 11.9087 0.4208L0.9847 6.4908C0.3687 6.8328 -0.0003 7.3248 -0.0003 8.0488V19.9438C-0.0003 21.1328 0.3687 21.7208 1.3677 22.2678ZM20.1387 10.2918L8.0527 3.7018L12.5237 1.2268C13.1387 0.8718 13.7817 0.8718 14.3967 1.2268L25.4847 7.3798ZM13.4527 13.9278L1.4357 7.3798L7.0137 4.2758L19.0997 10.8518ZM2.1327 21.5438C1.2027 21.0378 1.0387 20.6548 1.0387 19.8758V8.3228L12.9477 14.8168V27.4228ZM24.7867 21.5438L13.9727 27.4228V14.8168L25.8807 8.3228V19.8758C25.8807 20.6548 25.7167 21.0378 24.7867 21.5438Z"
            fill={color}
          />
        </svg>
      )
    case "ultralight":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 26.71484375 28.305935467982692"
          className={className}
        >
          <path
            d="              M1.2027 21.9395L12.4957 28.0645C13.0837 28.3795 13.6177 28.3935 14.2327 28.0645L25.5117 21.9395C26.4277 21.4345 26.7147 20.8875 26.7147 19.9165V7.7215C26.7147 7.1885 26.3867 6.8185 25.9357 6.5595L14.6427 0.3385C13.8357 -0.1125 12.8787 -0.1125 12.0727 0.3385L0.7927 6.5595C0.3277 6.8185 -0.0003 7.1885 -0.0003 7.7215V19.9165C-0.0003 20.8875 0.2867 21.4345 1.2027 21.9395ZM20.1247 10.3325L7.5877 3.5645L12.6057 0.8035C13.0837 0.5295 13.6307 0.5295 14.1097 0.8035L25.8127 7.2425ZM13.3577 13.9825L0.9027 7.2425L6.8767 3.9475L19.4137 10.7015ZM1.8457 21.5295C0.8617 20.9965 0.7387 20.6415 0.7387 19.8485V7.9395L13.0017 14.5575V27.5185ZM24.8687 21.5295L13.7127 27.5185V14.5575L25.9767 7.9395V19.8485C25.9767 20.6415 25.8537 20.9965 24.8687 21.5295Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}