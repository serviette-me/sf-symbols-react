import { IconProps } from "../../types"

export default function ArrowDownToLineIconIcon({
  weight = "regular",
  color = "#000000",
  className = "",
}: IconProps) {
  switch (weight) {
    case "black":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 23.173828125 31.732421875"
          className={className}
        >
          <path
            d="              M23.1737 15.0665C23.1737 13.4945 22.0527 12.4415 20.5897 12.4415C19.7287 12.4415 19.1137 12.8375 18.6207 13.3435L15.5997 16.4065L14.2047 18.1425L14.3417 15.2445V2.9125C14.3417 1.1625 13.2477 0.0005 11.5937 0.0005C9.9397 0.0005 8.8457 1.1625 8.8457 2.9125V15.2445L8.9827 18.1425L7.5877 16.4065L4.5527 13.3435C4.0467 12.8375 3.4457 12.4415 2.5837 12.4415C1.1207 12.4415 -0.0003 13.4945 -0.0003 15.0665C-0.0003 15.7915 0.3007 16.4745 0.8477 17.0215L9.5837 25.7575C10.0487 26.2365 10.8557 26.5375 11.5937 26.5375C12.3317 26.5375 13.1247 26.2365 13.6037 25.7575L22.3127 17.0215C22.8727 16.4745 23.1737 15.7915 23.1737 15.0665ZM23.1737 29.1345C23.1737 27.6995 22.0117 26.5375 20.5767 26.5375H2.5977C1.1487 26.5375 -0.0003 27.6995 -0.0003 29.1345C-0.0003 30.5705 1.1487 31.7325 2.5977 31.7325H20.5767C22.0117 31.7325 23.1737 30.5705 23.1737 29.1345Z"
            fill={color}
          />
        </svg>
      )
    case "bold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 21.943359375 30.009765625"
          className={className}
        >
          <path
            d="              M21.9437 28.0955C21.9437 27.0295 21.1367 26.1815 20.0567 26.1815H11.1017C11.5937 26.1545 12.0997 25.9355 12.4417 25.5935L21.3277 16.6795C21.7387 16.2695 21.9437 15.7775 21.9437 15.2575C21.9437 14.1365 21.1367 13.3435 20.0707 13.3435C19.4827 13.3435 19.0177 13.6035 18.6487 13.9725L15.5857 17.0355L12.8377 20.2075L12.9607 17.2265V2.0505C12.9607 0.8345 12.1677 0.0005 10.9787 0.0005C9.8027 0.0005 8.9957 0.8345 8.9957 2.0505V17.2265L9.1187 20.1935L6.3707 17.0355L3.2947 13.9725C2.9397 13.6035 2.4747 13.3435 1.8727 13.3435C0.8067 13.3435 -0.0003 14.1365 -0.0003 15.2575C-0.0003 15.7775 0.2047 16.2695 0.6157 16.6795L9.5157 25.5935C9.8577 25.9355 10.3637 26.1545 10.8557 26.1815H1.9007C0.8207 26.1815 -0.0003 27.0295 -0.0003 28.0955C-0.0003 29.1755 0.8207 30.0095 1.9007 30.0095H20.0567C21.1367 30.0095 21.9437 29.1755 21.9437 28.0955Z"
            fill={color}
          />
        </svg>
      )
    case "heavy":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 22.5859375 30.92578125"
          className={className}
        >
          <path
            d="              M22.5857 28.6423C22.5857 27.3843 21.6017 26.3733 20.3297 26.3733H11.3887C12.0037 26.3453 12.6467 26.0863 13.0567 25.6753L21.8477 16.8713C22.3397 16.3793 22.5857 15.7913 22.5857 15.1623C22.5857 13.8083 21.6157 12.8653 20.3437 12.8653C19.6057 12.8653 19.0727 13.1933 18.6347 13.6443L15.5857 16.7073L13.5627 19.1403L13.6857 16.1873V2.5023C13.6857 0.9983 12.7287 0.0003 11.3067 0.0003C9.8707 0.0003 8.9137 0.9983 8.9137 2.5023V16.1873L9.0507 19.1403L7.0137 16.7073L3.9647 13.6443C3.5277 13.1933 2.9807 12.8653 2.2557 12.8653C0.9707 12.8653 -0.0003 13.8083 -0.0003 15.1623C-0.0003 15.7913 0.2597 16.3793 0.7387 16.8713L9.5567 25.6753C9.9527 26.0863 10.5957 26.3453 11.2247 26.3733H2.2697C0.9977 26.3733 -0.0003 27.3843 -0.0003 28.6423C-0.0003 29.9143 0.9977 30.9253 2.2697 30.9253H20.3297C21.6017 30.9253 22.5857 29.9143 22.5857 28.6423Z"
            fill={color}
          />
        </svg>
      )
    case "light":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20.384765625 27.466796875"
          className={className}
        >
          <path
            d="              M20.3847 26.551C20.3847 26.004 20.0157 25.621 19.4827 25.621H10.3637C10.5547 25.58 10.7327 25.484 10.8827 25.32L20.0977 16.119C20.3027 15.914 20.3847 15.695 20.3847 15.449C20.3847 14.93 20.0017 14.533 19.4957 14.533C19.2497 14.533 19.0037 14.629 18.8397 14.793L14.7107 18.881L11.0337 22.859L11.1157 19.92V0.916C11.1157 0.383 10.7327 0 10.1997 0C9.6527 0 9.2697 0.383 9.2697 0.916V19.92L9.3657 22.846L5.6877 18.881L1.5447 14.793C1.3947 14.629 1.1347 14.533 0.8887 14.533C0.3827 14.533 -0.0003 14.93 -0.0003 15.449C-0.0003 15.695 0.0957 15.914 0.2867 16.119L9.5017 25.32C9.6527 25.484 9.8297 25.58 10.0217 25.621H0.9157C0.3827 25.621 -0.0003 26.004 -0.0003 26.551C-0.0003 27.084 0.3827 27.467 0.9157 27.467H19.4827C20.0157 27.467 20.3847 27.084 20.3847 26.551Z"
            fill={color}
          />
        </svg>
      )
    case "medium":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 21.1640625 28.90234375"
          className={className}
        >
          <path
            d="              M21.1637 27.4399C21.1637 26.5919 20.5627 25.9629 19.7287 25.9629H10.7187C11.0747 25.9359 11.4297 25.7579 11.7027 25.4839L20.6997 16.4609C21.0137 16.1329 21.1637 15.7769 21.1637 15.3809C21.1637 14.5469 20.5627 13.9319 19.7427 13.9319C19.3187 13.9319 18.9497 14.0959 18.6757 14.3689L15.5727 17.4319L11.9627 21.4649L12.0857 18.5119V1.5179C12.0857 0.6149 11.4707 -0.0001 10.5817 -0.0001C9.7067 -0.0001 9.0917 0.6149 9.0917 1.5179V18.5119L9.2017 21.4509L5.5917 17.4319L2.4887 14.3689C2.2287 14.0959 1.8457 13.9319 1.4357 13.9319C0.6157 13.9319 -0.0003 14.5469 -0.0003 15.3809C-0.0003 15.7769 0.1507 16.1329 0.4647 16.4609L9.4747 25.4839C9.7477 25.7579 10.0897 25.9359 10.4587 25.9629H1.4627C0.6157 25.9629 -0.0003 26.5919 -0.0003 27.4399C-0.0003 28.2739 0.6157 28.9019 1.4627 28.9019H19.7287C20.5627 28.9019 21.1637 28.2739 21.1637 27.4399Z"
            fill={color}
          />
        </svg>
      )
    case "regular":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20.7265625 28.287109375"
          className={className}
        >
          <path
            d="              M20.7267 27.0565C20.7267 26.3455 20.2477 25.8395 19.5507 25.8395H10.4997C10.7867 25.8125 11.0467 25.6625 11.2797 25.4295L20.3577 16.3375C20.6177 16.0645 20.7267 15.7775 20.7267 15.4495C20.7267 14.7795 20.2347 14.2595 19.5507 14.2595C19.2227 14.2595 18.9087 14.3695 18.6897 14.5875L15.5727 17.6505L11.4847 22.1485L11.5797 19.2225V1.2035C11.5797 0.5055 11.0747 0.0005 10.3637 0.0005C9.6527 0.0005 9.1467 0.5055 9.1467 1.2035V19.2225L9.2427 22.1345L5.1547 17.6505L2.0367 14.5875C1.8317 14.3695 1.5037 14.2595 1.1757 14.2595C0.4927 14.2595 -0.0003 14.7795 -0.0003 15.4495C-0.0003 15.7775 0.1227 16.0645 0.3827 16.3375L9.4477 25.4295C9.6797 25.6625 9.9527 25.8125 10.2407 25.8395H1.2027C0.4927 25.8395 -0.0003 26.3455 -0.0003 27.0565C-0.0003 27.7675 0.4927 28.2875 1.2027 28.2875H19.5507C20.2477 28.2875 20.7267 27.7675 20.7267 27.0565Z"
            fill={color}
          />
        </svg>
      )
    case "semibold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 21.505859375 29.380859375"
          className={className}
        >
          <path
            d="              M21.5057 27.727C21.5057 26.783 20.8087 26.059 19.8787 26.059H10.8827C11.3067 26.031 11.7167 25.84 12.0177 25.539L20.9727 16.557C21.3277 16.201 21.5057 15.791 21.5057 15.34C21.5057 14.383 20.8087 13.686 19.8787 13.686C19.3867 13.686 18.9767 13.891 18.6617 14.205L15.5857 17.268L12.3457 20.932L12.4547 17.965V1.75C12.4547 0.711 11.7717 0 10.7597 0C9.7477 0 9.0507 0.711 9.0507 1.75V17.965L9.1737 20.918L5.9337 17.268L2.8437 14.205C2.5297 13.891 2.1187 13.686 1.6267 13.686C0.6977 13.686 -0.0003 14.383 -0.0003 15.34C-0.0003 15.791 0.1777 16.201 0.5337 16.557L9.4887 25.539C9.7887 25.84 10.2127 26.031 10.6227 26.059H1.6547C0.7107 26.059 -0.0003 26.783 -0.0003 27.727C-0.0003 28.67 0.7107 29.381 1.6547 29.381H19.8787C20.8087 29.381 21.5057 28.67 21.5057 27.727Z"
            fill={color}
          />
        </svg>
      )
    case "thin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 19.93359375 26.38671875"
          className={className}
        >
          <path
            d="              M19.9337 25.8538C19.9337 25.5528 19.7017 25.3208 19.4137 25.3208H10.1307C10.2127 25.2928 10.2817 25.2388 10.3497 25.1698L19.7697 15.8048C19.8787 15.6958 19.9337 15.5858 19.9337 15.4358C19.9337 15.1208 19.7017 14.9028 19.4277 14.9028C19.2777 14.9028 19.1267 14.9568 19.0317 15.0388L13.5627 20.5078L10.4317 23.7478L10.4867 20.8358V0.5198C10.4867 0.2328 10.2677 -0.0002 9.9667 -0.0002C9.6657 -0.0002 9.4477 0.2328 9.4477 0.5198V20.8358L9.5017 23.7478L6.3707 20.5078L0.9027 15.0388C0.8067 14.9568 0.6567 14.9028 0.5057 14.9028C0.2327 14.9028 -0.0003 15.1208 -0.0003 15.4358C-0.0003 15.5858 0.0547 15.6958 0.1637 15.8048L9.5837 25.1698C9.6527 25.2388 9.7207 25.2928 9.7887 25.3208H0.5337C0.2327 25.3208 -0.0003 25.5528 -0.0003 25.8538C-0.0003 26.1548 0.2327 26.3868 0.5337 26.3868H19.4137C19.7017 26.3868 19.9337 26.1548 19.9337 25.8538Z"
            fill={color}
          />
        </svg>
      )
    case "ultralight":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 19.701171875 25.826171875"
          className={className}
        >
          <path
            d="              M19.7017 25.4983C19.7017 25.3203 19.5507 25.1703 19.3727 25.1703H9.9937C10.0217 25.1563 10.0487 25.1293 10.0767 25.1013L19.6057 15.6543C19.6737 15.5863 19.7017 15.5173 19.7017 15.4223C19.7017 15.2163 19.5507 15.0933 19.3867 15.0933C19.2777 15.0933 19.1817 15.1213 19.1407 15.1753L12.9747 21.3413L10.1307 24.1993L10.1717 21.3003V0.3143C10.1717 0.1503 10.0347 0.0003 9.8437 0.0003C9.6657 0.0003 9.5297 0.1503 9.5297 0.3143V21.3003L9.5707 24.1993L6.7267 21.3413L0.5607 15.1753C0.5197 15.1213 0.4097 15.0933 0.3147 15.0933C0.1507 15.0933 -0.0003 15.2163 -0.0003 15.4223C-0.0003 15.5173 0.0277 15.5863 0.0957 15.6543L9.6247 25.1013C9.6527 25.1293 9.6797 25.1563 9.7067 25.1703H0.3277C0.1507 25.1703 -0.0003 25.3203 -0.0003 25.4983C-0.0003 25.6753 0.1507 25.8263 0.3277 25.8263H19.3727C19.5507 25.8263 19.7017 25.6753 19.7017 25.4983Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}