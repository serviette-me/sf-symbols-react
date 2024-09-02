import { IconProps } from "../../types"

export default function OvenIconIcon({
  weight = "regular",
  color = "#000000",
  className = "",
}: IconProps) {
  switch (weight) {
    case "black":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32.046875 28.669921875"
          className={className}
        >
          <path
            d="              M4.3617 28.6696H27.6587C30.2427 28.6696 32.0467 26.8376 32.0467 24.2406V4.4436C32.0467 1.8456 30.2427 -0.0004 27.6587 -0.0004H4.3617C1.7907 -0.0004 -0.0003 1.8456 -0.0003 4.4436V24.2406C-0.0003 26.8376 1.7907 28.6696 4.3617 28.6696ZM4.3887 4.9626C4.3887 4.6076 4.6347 4.3746 4.9767 4.3746H27.2067C27.4807 4.3746 27.6587 4.5526 27.6587 4.7986V10.0216H4.3887ZM7.9027 8.9276C8.7777 8.9276 9.5297 8.2166 9.5297 7.3286C9.5297 6.4256 8.7777 5.7146 7.9027 5.7146C7.0137 5.7146 6.2887 6.4256 6.2887 7.3286C6.2887 8.2166 7.0137 8.9276 7.9027 8.9276ZM11.8267 8.9276C12.7147 8.9276 13.4397 8.2166 13.4397 7.3286C13.4397 6.4256 12.7147 5.7146 11.8267 5.7146C10.9517 5.7146 10.1997 6.4256 10.1997 7.3286C10.1997 8.2166 10.9517 8.9276 11.8267 8.9276ZM15.7367 8.9276C16.6117 8.9276 17.3637 8.2166 17.3637 7.3286C17.3637 6.4256 16.6117 5.7146 15.7367 5.7146C14.8617 5.7146 14.1227 6.4256 14.1227 7.3286C14.1227 8.2166 14.8617 8.9276 15.7367 8.9276ZM21.1227 8.6266H24.5277C25.2247 8.6266 25.7987 8.0526 25.7987 7.3556C25.7987 6.6716 25.2247 6.0976 24.5277 6.0976H21.1227C20.4257 6.0976 19.8517 6.6716 19.8517 7.3556C19.8517 8.0526 20.4257 8.6266 21.1227 8.6266ZM4.9767 24.2946C4.6347 24.2946 4.3887 24.0626 4.3887 23.7066V12.7556H27.6587V23.8716C27.6587 24.1306 27.4807 24.2946 27.2067 24.2946ZM7.5057 22.8046H24.5547C25.3067 22.8046 25.7987 22.3266 25.7987 21.5746V15.1626C25.7987 14.4106 25.3067 13.9176 24.5547 13.9176H7.5057C6.7537 13.9176 6.2617 14.4106 6.2617 15.1626V21.5746C6.2617 22.3266 6.7537 22.8046 7.5057 22.8046ZM8.6547 16.4066C8.6547 16.2696 8.7777 16.1466 8.9137 16.1466H23.1467C23.2837 16.1466 23.4067 16.2696 23.4067 16.4066V16.8986H8.6547ZM8.9137 20.4256C8.7777 20.4256 8.6547 20.3026 8.6547 20.1656V18.4976H23.4067V20.1656C23.4067 20.3026 23.2837 20.4256 23.1467 20.4256Z"
            fill={color}
          />
        </svg>
      )
    case "bold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 30.2421875 26.126953125"
          className={className}
        >
          <path
            d="              M3.7867 26.1274H26.4417C28.6837 26.1274 30.2427 24.5684 30.2427 22.2984V3.8284C30.2427 1.5584 28.6837 0.0004 26.4417 0.0004H3.7867C1.5447 0.0004 -0.0003 1.5584 -0.0003 3.8284V22.2984C-0.0003 24.5684 1.5447 26.1274 3.7867 26.1274ZM3.2947 4.1284C3.2947 3.6234 3.6227 3.2814 4.1017 3.2814H26.1957C26.6467 3.2814 26.9337 3.5954 26.9337 4.0604V8.2034H3.2947ZM6.9587 7.2184C7.7247 7.2184 8.3677 6.5894 8.3677 5.8104C8.3677 5.0314 7.7247 4.4024 6.9587 4.4024C6.1797 4.4024 5.5507 5.0314 5.5507 5.8104C5.5507 6.5894 6.1797 7.2184 6.9587 7.2184ZM10.6777 7.2184C11.4567 7.2184 12.0857 6.5894 12.0857 5.8104C12.0857 5.0314 11.4567 4.4024 10.6777 4.4024C9.9117 4.4024 9.2697 5.0314 9.2697 5.8104C9.2697 6.5894 9.9117 7.2184 10.6777 7.2184ZM14.3967 7.2184C15.1617 7.2184 15.8047 6.5894 15.8047 5.8104C15.8047 5.0314 15.1617 4.4024 14.3967 4.4024C13.6307 4.4024 12.9887 5.0314 12.9887 5.8104C12.9887 6.5894 13.6307 7.2184 14.3967 7.2184ZM20.2887 6.8084H23.8437C24.3907 6.8084 24.8147 6.3844 24.8147 5.8244C24.8147 5.2774 24.3907 4.8534 23.8437 4.8534H20.2887C19.7427 4.8534 19.3187 5.2774 19.3187 5.8244C19.3187 6.3844 19.7427 6.8084 20.2887 6.8084ZM4.1017 22.8324C3.6227 22.8324 3.2947 22.4904 3.2947 21.9844V10.4594H26.9337V22.0664C26.9337 22.5314 26.6467 22.8324 26.1957 22.8324ZM6.6307 21.2464H23.6247C24.3767 21.2464 24.8827 20.7534 24.8827 19.9884V13.0704C24.8827 12.3044 24.3767 11.8124 23.6247 11.8124H6.6307C5.8657 11.8124 5.3727 12.3044 5.3727 13.0704V19.9884C5.3727 20.7534 5.8657 21.2464 6.6307 21.2464ZM7.3277 14.0004C7.3277 13.8224 7.4647 13.6854 7.6287 13.6854H22.6137C22.7907 13.6854 22.9277 13.8224 22.9277 14.0004V14.8204H7.3277ZM7.6287 19.3044C7.4647 19.3044 7.3277 19.1544 7.3277 18.9904V16.3784H22.9277V18.9904C22.9277 19.1544 22.7907 19.3044 22.6137 19.3044Z"
            fill={color}
          />
        </svg>
      )
    case "heavy":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 31.185546875 27.48046875"
          className={className}
        >
          <path
            d="              M4.1017 27.48H27.0837C29.5037 27.48 31.1857 25.771 31.1857 23.324V4.156C31.1857 1.709 29.5037 0 27.0837 0H4.1017C1.6677 0 -0.0003 1.709 -0.0003 4.156V23.324C-0.0003 25.771 1.6677 27.48 4.1017 27.48ZM3.8687 4.58C3.8687 4.156 4.1567 3.869 4.5667 3.869H26.7427C27.0837 3.869 27.3167 4.102 27.3167 4.457V9.174H3.8687ZM7.4517 8.121C8.2847 8.121 8.9827 7.451 8.9827 6.617C8.9827 5.77 8.2847 5.1 7.4517 5.1C6.6177 5.1 5.9337 5.77 5.9337 6.617C5.9337 7.451 6.6177 8.121 7.4517 8.121ZM11.2797 8.121C12.1137 8.121 12.8107 7.451 12.8107 6.617C12.8107 5.77 12.1137 5.1 11.2797 5.1C10.4587 5.1 9.7617 5.77 9.7617 6.617C9.7617 7.451 10.4587 8.121 11.2797 8.121ZM15.0937 8.121C15.9277 8.121 16.6247 7.451 16.6247 6.617C16.6247 5.77 15.9277 5.1 15.0937 5.1C14.2737 5.1 13.5897 5.77 13.5897 6.617C13.5897 7.451 14.2737 8.121 15.0937 8.121ZM20.7267 7.766H24.1997C24.8277 7.766 25.3337 7.273 25.3337 6.645C25.3337 6.016 24.8277 5.51 24.1997 5.51H20.7267C20.0977 5.51 19.6057 6.016 19.6057 6.645C19.6057 7.273 20.0977 7.766 20.7267 7.766ZM4.5667 23.611C4.1567 23.611 3.8687 23.324 3.8687 22.9V11.676H27.3167V23.023C27.3167 23.379 27.0837 23.611 26.7427 23.611ZM7.0957 22.08H24.1177C24.8687 22.08 25.3617 21.588 25.3617 20.836V14.178C25.3617 13.426 24.8687 12.934 24.1177 12.934H7.0957C6.3297 12.934 5.8517 13.426 5.8517 14.178V20.836C5.8517 21.588 6.3297 22.08 7.0957 22.08ZM8.0257 15.271C8.0257 15.121 8.1487 14.984 8.3127 14.984H22.9007C23.0507 14.984 23.1877 15.121 23.1877 15.271V15.914H8.0257ZM8.3127 19.893C8.1487 19.893 8.0257 19.77 8.0257 19.619V17.5H23.1877V19.619C23.1877 19.77 23.0507 19.893 22.9007 19.893Z"
            fill={color}
          />
        </svg>
      )
    case "light":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 27.166015625 22.640625"
          className={className}
        >
          <path
            d="              M2.9257 22.6404H24.2407C25.9907 22.6404 27.1657 21.4374 27.1657 19.6464V3.0074C27.1657 1.2034 25.9907 0.0004 24.2407 0.0004H2.9257C1.1617 0.0004 -0.0003 1.2034 -0.0003 3.0074V19.6464C-0.0003 21.4374 1.1617 22.6404 2.9257 22.6404ZM1.6957 3.0624C1.6957 2.2424 2.1877 1.6954 2.9257 1.6954H24.2407C24.9787 1.6954 25.4707 2.2424 25.4707 3.0624V6.4124H1.6957ZM5.5647 5.2774C6.2347 5.2774 6.7537 4.7444 6.7537 4.0874C6.7537 3.4314 6.2347 2.9124 5.5647 2.9124C4.9087 2.9124 4.3747 3.4314 4.3747 4.0874C4.3747 4.7444 4.9087 5.2774 5.5647 5.2774ZM9.1327 5.2774C9.8027 5.2774 10.3227 4.7444 10.3227 4.0874C10.3227 3.4314 9.8027 2.9124 9.1327 2.9124C8.4767 2.9124 7.9437 3.4314 7.9437 4.0874C7.9437 4.7444 8.4767 5.2774 9.1327 5.2774ZM12.6877 5.2774C13.3577 5.2774 13.8767 4.7444 13.8767 4.0874C13.8767 3.4314 13.3577 2.9124 12.6877 2.9124C12.0317 2.9124 11.5117 3.4314 11.5117 4.0874C11.5117 4.7444 12.0317 5.2774 12.6877 5.2774ZM18.7847 4.6624H22.4627C22.8047 4.6624 23.0367 4.4164 23.0367 4.0874C23.0367 3.7464 22.8047 3.5134 22.4627 3.5134H18.7847C18.4437 3.5134 18.2107 3.7464 18.2107 4.0874C18.2107 4.4164 18.4437 4.6624 18.7847 4.6624ZM2.9257 20.9454C2.1877 20.9454 1.6957 20.4124 1.6957 19.5914V7.8344H25.4707V19.5914C25.4707 20.4124 24.9787 20.9454 24.2407 20.9454ZM5.1957 19.1274H21.9707C22.7777 19.1274 23.2967 18.6074 23.2967 17.7874V10.8964C23.2967 10.0894 22.7777 9.5564 21.9707 9.5564H5.1957C4.3887 9.5564 3.8687 10.0894 3.8687 10.8964V17.7874C3.8687 18.6074 4.3887 19.1274 5.1957 19.1274ZM5.1137 11.2934C5.1137 10.9924 5.3047 10.8004 5.5917 10.8004H21.5747C21.8617 10.8004 22.0527 10.9924 22.0527 11.2934V12.3454H5.1137ZM5.5917 17.8824C5.3047 17.8824 5.1137 17.6914 5.1137 17.3904V13.5894H22.0527V17.3904C22.0527 17.6914 21.8617 17.8824 21.5747 17.8824Z"
            fill={color}
          />
        </svg>
      )
    case "medium":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 29.080078125 24.5"
          className={className}
        >
          <path
            d="              M3.4177 24.5001H25.6487C27.6997 24.5001 29.0797 23.1051 29.0797 21.0681V3.4321C29.0797 1.3811 27.6997 0.0001 25.6487 0.0001H3.4177C1.3807 0.0001 -0.0003 1.3811 -0.0003 3.4321V21.0681C-0.0003 23.1051 1.3807 24.5001 3.4177 24.5001ZM2.5977 3.6091C2.5977 2.9941 2.9807 2.5841 3.5547 2.5841H25.5527C26.1137 2.5841 26.4827 2.9801 26.4827 3.5821V7.0271H2.5977ZM6.3577 6.1111C7.0547 6.1111 7.6287 5.5511 7.6287 4.8531C7.6287 4.1421 7.0547 3.5681 6.3577 3.5681C5.6467 3.5681 5.0727 4.1421 5.0727 4.8531C5.0727 5.5511 5.6467 6.1111 6.3577 6.1111ZM9.9527 6.1111C10.6507 6.1111 11.2247 5.5511 11.2247 4.8531C11.2247 4.1421 10.6507 3.5681 9.9527 3.5681C9.2427 3.5681 8.6677 4.1421 8.6677 4.8531C8.6677 5.5511 9.2427 6.1111 9.9527 6.1111ZM13.5347 6.1111C14.2457 6.1111 14.8067 5.5511 14.8067 4.8531C14.8067 4.1421 14.2457 3.5681 13.5347 3.5681C12.8377 3.5681 12.2637 4.1421 12.2637 4.8531C12.2637 5.5511 12.8377 6.1111 13.5347 6.1111ZM19.7557 5.6461H23.4067C23.8707 5.6461 24.1997 5.3051 24.1997 4.8531C24.1997 4.3891 23.8707 4.0601 23.4067 4.0601H19.7557C19.3047 4.0601 18.9627 4.3891 18.9627 4.8531C18.9627 5.3051 19.3047 5.6461 19.7557 5.6461ZM3.5547 21.9021C2.9807 21.9021 2.5977 21.4921 2.5977 20.8911V8.9821H26.4827V20.9181C26.4827 21.5061 26.1137 21.9021 25.5527 21.9021ZM6.0707 20.2621H23.0237C23.7887 20.2621 24.2947 19.7561 24.2947 18.9761V11.7441C24.2947 10.9651 23.7887 10.4731 23.0237 10.4731H6.0707C5.2907 10.4731 4.7987 10.9651 4.7987 11.7441V18.9761C4.7987 19.7561 5.2907 20.2621 6.0707 20.2621ZM6.4667 12.4551C6.4667 12.2641 6.6177 12.1131 6.8227 12.1131H22.2717C22.4627 12.1131 22.6137 12.2641 22.6137 12.4551V13.4941H6.4667ZM6.8227 18.5801C6.6177 18.5801 6.4667 18.4301 6.4667 18.2381V15.0391H22.6137V18.2381C22.6137 18.4301 22.4627 18.5801 22.2717 18.5801Z"
            fill={color}
          />
        </svg>
      )
    case "regular":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 28.423828125 23.59765625"
          className={className}
        >
          <path
            d="              M3.2127 23.5979H25.2107C27.1387 23.5979 28.4237 22.2989 28.4237 20.3849V3.2129C28.4237 1.2989 27.1387 -0.0001 25.2107 -0.0001H3.2127C1.2847 -0.0001 -0.0003 1.2989 -0.0003 3.2129V20.3849C-0.0003 22.2989 1.2847 23.5979 3.2127 23.5979ZM2.2017 3.3219C2.2017 2.6519 2.6117 2.2009 3.2407 2.2009H25.1977C25.8127 2.2009 26.2227 2.6519 26.2227 3.3219V6.3849H2.2017ZM6.0157 5.5099C6.6717 5.5099 7.2047 4.9769 7.2047 4.3069C7.2047 3.6499 6.6717 3.1169 6.0157 3.1169C5.3457 3.1169 4.8127 3.6499 4.8127 4.3069C4.8127 4.9769 5.3457 5.5099 6.0157 5.5099ZM9.5297 5.5099C10.1997 5.5099 10.7327 4.9769 10.7327 4.3069C10.7327 3.6499 10.1997 3.1169 9.5297 3.1169C8.8727 3.1169 8.3397 3.6499 8.3397 4.3069C8.3397 4.9769 8.8727 5.5099 9.5297 5.5099ZM13.0567 5.5099C13.7127 5.5099 14.2457 4.9769 14.2457 4.3069C14.2457 3.6499 13.7127 3.1169 13.0567 3.1169C12.3867 3.1169 11.8537 3.6499 11.8537 4.3069C11.8537 4.9769 12.3867 5.5099 13.0567 5.5099ZM19.4687 5.0039H23.1597C23.5707 5.0039 23.8437 4.7169 23.8437 4.3069C23.8437 3.8969 23.5707 3.6229 23.1597 3.6229H19.4687C19.0587 3.6229 18.7717 3.8969 18.7717 4.3069C18.7717 4.7169 19.0587 5.0039 19.4687 5.0039ZM3.2407 21.3969C2.6117 21.3969 2.2017 20.9449 2.2017 20.2749V8.1759H26.2227V20.2749C26.2227 20.9449 25.8127 21.3969 25.1977 21.3969ZM5.7557 19.7009H22.6817C23.4607 19.7009 23.9527 19.2089 23.9527 18.4299V11.0059C23.9527 10.2269 23.4607 9.7209 22.6817 9.7209H5.7557C4.9767 9.7209 4.4707 10.2269 4.4707 11.0059V18.4299C4.4707 19.2089 4.9767 19.7009 5.7557 19.7009ZM6.0017 11.6069C6.0017 11.3889 6.1527 11.2379 6.3577 11.2379H22.0797C22.2847 11.2379 22.4357 11.3889 22.4357 11.6069V12.7699H6.0017ZM6.3577 18.1839C6.1527 18.1839 6.0017 18.0329 6.0017 17.8279V14.2869H22.4357V17.8279C22.4357 18.0329 22.2847 18.1839 22.0797 18.1839Z"
            fill={color}
          />
        </svg>
      )
    case "semibold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 29.572265625 25.197265625"
          className={className}
        >
          <path
            d="              M3.5817 25.1976H25.9907C28.1227 25.1976 29.5727 23.7346 29.5727 21.6016V3.5956C29.5727 1.4626 28.1227 -0.0004 25.9907 -0.0004H3.5817C1.4497 -0.0004 -0.0003 1.4626 -0.0003 3.5956V21.6016C-0.0003 23.7346 1.4497 25.1976 3.5817 25.1976ZM2.8987 3.8416C2.8987 3.2676 3.2537 2.8846 3.7867 2.8846H25.8397C26.3457 2.8846 26.6737 3.2536 26.6737 3.7876V7.5336H2.8987ZM6.6177 6.5896C7.3417 6.5896 7.9437 6.0016 7.9437 5.2636C7.9437 4.5256 7.3417 3.9376 6.6177 3.9376C5.8787 3.9376 5.2777 4.5256 5.2777 5.2636C5.2777 6.0016 5.8787 6.5896 6.6177 6.5896ZM10.2677 6.5896C10.9927 6.5896 11.5937 6.0016 11.5937 5.2636C11.5937 4.5256 10.9927 3.9376 10.2677 3.9376C9.5297 3.9376 8.9277 4.5256 8.9277 5.2636C8.9277 6.0016 9.5297 6.5896 10.2677 6.5896ZM13.9047 6.5896C14.6427 6.5896 15.2437 6.0016 15.2437 5.2636C15.2437 4.5256 14.6427 3.9376 13.9047 3.9376C13.1797 3.9376 12.5777 4.5256 12.5777 5.2636C12.5777 6.0016 13.1797 6.5896 13.9047 6.5896ZM19.9887 6.1526H23.5977C24.0897 6.1526 24.4587 5.7696 24.4587 5.2776C24.4587 4.7716 24.0897 4.4026 23.5977 4.4026H19.9887C19.4827 4.4026 19.1137 4.7716 19.1137 5.2776C19.1137 5.7696 19.4827 6.1526 19.9887 6.1526ZM3.7867 22.3126C3.2537 22.3126 2.8987 21.9296 2.8987 21.3696V9.6246H26.6737V21.4106C26.6737 21.9436 26.3457 22.3126 25.8397 22.3126ZM6.3167 20.6856H23.2837C24.0487 20.6856 24.5407 20.1936 24.5407 19.4136V12.3186C24.5407 11.5526 24.0487 11.0466 23.2837 11.0466H6.3167C5.5367 11.0466 5.0447 11.5526 5.0447 12.3186V19.4136C5.0447 20.1936 5.5367 20.6856 6.3167 20.6856ZM6.8357 13.1246C6.8357 12.9336 6.9867 12.7966 7.1637 12.7966H22.4217C22.5997 12.7966 22.7497 12.9336 22.7497 13.1246V14.0686H6.8357ZM7.1637 18.8946C6.9867 18.8946 6.8357 18.7446 6.8357 18.5666V15.6136H22.7497V18.5666C22.7497 18.7446 22.5997 18.8946 22.4217 18.8946Z"
            fill={color}
          />
        </svg>
      )
    case "thin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 25.498046875 21.369140625"
          className={className}
        >
          <path
            d="              M2.5427 21.3688H22.9547C24.4867 21.3688 25.4977 20.2888 25.4977 18.6618V2.7068C25.4977 1.0798 24.4867 -0.0002 22.9547 -0.0002H2.5427C1.0117 -0.0002 -0.0003 1.0798 -0.0003 2.7068V18.6618C-0.0003 20.2888 1.0117 21.3688 2.5427 21.3688ZM1.0117 2.7068C1.0117 1.6818 1.6137 1.0118 2.5157 1.0118H22.9827C23.8847 1.0118 24.4867 1.6818 24.4867 2.7068V6.4398H1.0117ZM4.9907 4.9488C5.6467 4.9488 6.1657 4.4438 6.1657 3.8008C6.1657 3.1308 5.6467 2.6248 4.9907 2.6248C4.3207 2.6248 3.8147 3.1308 3.8147 3.8008C3.8147 4.4438 4.3207 4.9488 4.9907 4.9488ZM8.6137 4.9488C9.2697 4.9488 9.7887 4.4438 9.7887 3.8008C9.7887 3.1308 9.2697 2.6248 8.6137 2.6248C7.9437 2.6248 7.4377 3.1308 7.4377 3.8008C7.4377 4.4438 7.9437 4.9488 8.6137 4.9488ZM12.2087 4.9488C12.8787 4.9488 13.3847 4.4438 13.3847 3.8008C13.3847 3.1308 12.8787 2.6248 12.2087 2.6248C11.5527 2.6248 11.0337 3.1308 11.0337 3.8008C11.0337 4.4438 11.5527 4.9488 12.2087 4.9488ZM17.8967 4.1968H21.5607C21.7927 4.1968 21.9847 4.0198 21.9847 3.7868C21.9847 3.5408 21.7927 3.3628 21.5607 3.3628H17.8967C17.6507 3.3628 17.4727 3.5408 17.4727 3.7868C17.4727 4.0198 17.6507 4.1968 17.8967 4.1968ZM2.5157 20.3578C1.6137 20.3578 1.0117 19.6878 1.0117 18.6618V7.3688H24.4867V18.6618C24.4867 19.6878 23.8847 20.3578 22.9827 20.3578ZM4.4567 18.3478H21.0277C21.8887 18.3478 22.4217 17.8008 22.4217 16.9528V10.7458C22.4217 9.8848 21.8887 9.3378 21.0277 9.3378H4.4567C3.5957 9.3378 3.0627 9.8848 3.0627 10.7458V16.9528C3.0627 17.8008 3.5957 18.3478 4.4567 18.3478ZM3.9377 10.8688C3.9377 10.4728 4.1837 10.2128 4.5797 10.2128H20.9047C21.2867 10.2128 21.5467 10.4728 21.5467 10.8688V11.7718H3.9377ZM4.5797 17.4728C4.1837 17.4728 3.9377 17.2268 3.9377 16.8168V12.6468H21.5467V16.8168C21.5467 17.2268 21.2867 17.4728 20.9047 17.4728Z"
            fill={color}
          />
        </svg>
      )
    case "ultralight":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24.63671875 20.740234375"
          className={className}
        >
          <path
            d="              M2.3377 20.7404H22.2987C23.7067 20.7404 24.6367 19.7144 24.6367 18.1704V2.5704C24.6367 1.0254 23.7067 0.0004 22.2987 0.0004H2.3377C0.9297 0.0004 -0.0003 1.0254 -0.0003 2.5704V18.1704C-0.0003 19.7144 0.9297 20.7404 2.3377 20.7404ZM0.6697 2.5434C0.6697 1.4084 1.3267 0.6704 2.3107 0.6704H22.3397C23.3247 0.6704 23.9667 1.4084 23.9667 2.5434V6.4664H0.6697ZM4.6897 4.8124C5.3457 4.8124 5.8517 4.3064 5.8517 3.6504C5.8517 2.9944 5.3457 2.4884 4.6897 2.4884C4.0197 2.4884 3.5137 2.9944 3.5137 3.6504C3.5137 4.3064 4.0197 4.8124 4.6897 4.8124ZM8.3397 4.8124C8.9957 4.8124 9.5017 4.3064 9.5017 3.6504C9.5017 2.9944 8.9957 2.4884 8.3397 2.4884C7.6697 2.4884 7.1637 2.9944 7.1637 3.6504C7.1637 4.3064 7.6697 4.8124 8.3397 4.8124ZM11.9627 4.8124C12.6327 4.8124 13.1387 4.3064 13.1387 3.6504C13.1387 2.9944 12.6327 2.4884 11.9627 2.4884C11.3067 2.4884 10.8007 2.9944 10.8007 3.6504C10.8007 4.3064 11.3067 4.8124 11.9627 4.8124ZM17.4317 3.9784H21.0957C21.2867 3.9784 21.4377 3.8284 21.4377 3.6364C21.4377 3.4454 21.2867 3.2954 21.0957 3.2954H17.4317C17.2407 3.2954 17.0897 3.4454 17.0897 3.6364C17.0897 3.8284 17.2407 3.9784 17.4317 3.9784ZM2.3107 20.0704C1.3267 20.0704 0.6697 19.3324 0.6697 18.1974V7.1364H23.9667V18.1974C23.9667 19.3324 23.3247 20.0704 22.3397 20.0704ZM4.0747 17.9644H20.5487C21.4237 17.9644 21.9707 17.4044 21.9707 16.5294V10.6774C21.9707 9.8024 21.4237 9.2424 20.5487 9.2424H4.0747C3.1997 9.2424 2.6527 9.8024 2.6527 10.6774V16.5294C2.6527 17.4044 3.1997 17.9644 4.0747 17.9644ZM3.3357 10.6644C3.3357 10.2134 3.6227 9.9254 4.0607 9.9254H20.5627C20.9997 9.9254 21.2867 10.2134 21.2867 10.6644V11.4984H3.3357ZM4.0607 17.2814C3.6227 17.2814 3.3357 16.9944 3.3357 16.5434V12.1814H21.2867V16.5434C21.2867 16.9944 20.9997 17.2814 20.5627 17.2814Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}
