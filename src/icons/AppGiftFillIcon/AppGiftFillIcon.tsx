import { IconProps } from "../../types"

export default function AppGiftFillIconIcon({
  weight = "regular",
  color = "#000000",
  className = "",
}: IconProps) {
  switch (weight) {
    case "black":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 26.796875 26.796875"
          className={className}
        >
          <path
            d="              M24.8557 1.9555C26.3047 3.3905 26.7967 5.2495 26.7967 8.4625V12.2635H20.3707C21.4097 11.4155 22.0257 10.1715 22.0257 8.7225C22.0257 6.7675 20.4807 5.1545 18.3207 5.1545C16.8167 5.1545 15.6137 5.9195 14.8067 7.1505V-0.0005H18.3337C21.5197 -0.0005 23.3927 0.5055 24.8557 1.9555ZM11.5387 12.2635C9.5017 12.2635 7.8067 10.7185 7.8067 9.3785C7.8067 8.6405 8.2717 8.2445 8.9957 8.2445C10.4727 8.2445 11.7717 10.0625 11.7717 11.9765V12.2635ZM15.2577 12.2635H15.0387V11.9765C15.0387 10.0625 16.3247 8.2445 17.8007 8.2445C18.5257 8.2445 18.9907 8.6405 18.9907 9.3785C18.9907 10.7185 17.2947 12.2635 15.2577 12.2635ZM-0.0003 12.2635V8.4625C-0.0003 5.2495 0.4927 3.4045 1.9417 1.9555C3.4047 0.5055 5.2907 -0.0005 8.4627 -0.0005H12.0037V7.1505C11.1837 5.9195 9.9807 5.1545 8.4767 5.1545C6.3297 5.1545 4.7717 6.7675 4.7717 8.7225C4.7717 10.1715 5.4007 11.4155 6.4397 12.2635ZM20.3167 17.8145C18.8397 17.3765 17.1997 16.1055 16.4747 14.8885H26.7967V18.3335C26.7967 21.5465 26.3047 23.3785 24.8557 24.8415C23.4067 26.2905 21.5197 26.7965 18.3337 26.7965H14.8067V16.9395H14.8887C15.8727 19.4145 17.8687 21.1365 19.8787 21.5195C21.2737 21.7795 22.0257 20.7125 22.0257 19.6875C22.0257 18.7445 21.4237 18.1565 20.3167 17.8145ZM1.9417 24.8415C0.4927 23.3925 -0.0003 21.5465 -0.0003 18.3335V14.8885H10.3227C9.5977 16.1055 7.9567 17.3765 6.4937 17.8145C5.3867 18.1565 4.7847 18.7445 4.7847 19.6875C4.7847 20.7125 5.5367 21.7795 6.9317 21.5195C8.9277 21.1365 10.9377 19.4145 11.9087 16.9395H12.0037V26.7965H8.4627C5.2907 26.7965 3.4177 26.2905 1.9417 24.8415Z"
            fill={color}
          />
        </svg>
      )
    case "bold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 26.00390625 26.00390625"
          className={className}
        >
          <path
            d="              M24.2267 1.791C25.6617 3.199 26.0037 5.1 26.0037 7.875V12.209H19.4277C20.8637 11.375 21.8207 9.994 21.8207 8.353C21.8207 6.303 20.2617 4.703 18.1287 4.703C16.4607 4.703 15.0387 5.66 14.1507 7.219V0H18.1287C20.8767 0 22.8047 0.369 24.2267 1.791ZM11.2797 12.1C8.8187 12.1 6.7407 10.35 6.7407 8.764C6.7407 7.848 7.3147 7.301 8.2027 7.301C10.0217 7.301 11.6077 9.406 11.6077 11.744V12.1ZM14.7387 12.1H14.3967V11.744C14.3967 9.406 15.9827 7.301 17.8147 7.301C18.7027 7.301 19.2637 7.848 19.2637 8.764C19.2637 10.35 17.1997 12.1 14.7387 12.1ZM-0.0003 12.209V7.861C-0.0003 5.113 0.3557 3.213 1.7777 1.791C3.1997 0.369 5.1267 0 7.8617 0H11.8537V7.219C10.9647 5.66 9.5567 4.703 7.8887 4.703C5.7557 4.703 4.1977 6.303 4.1977 8.353C4.1977 9.994 5.1407 11.375 6.5897 12.209ZM20.4527 18.102C18.7027 17.773 16.4887 15.818 15.6957 14.342H26.0037V18.129C26.0037 20.891 25.6617 22.791 24.2267 24.213C22.8047 25.635 20.8767 26.004 18.1287 26.004H14.1507V15.873H14.2457C15.2167 18.607 18.0197 20.795 20.1527 21.15C21.2597 21.328 21.9027 20.494 21.9027 19.674C21.9027 18.826 21.3827 18.307 20.4527 18.102ZM1.7777 24.213C0.3417 22.805 -0.0003 20.891 -0.0003 18.129V14.342H10.3087C9.5297 15.818 7.3007 17.76 5.5647 18.102C4.6207 18.307 4.1157 18.826 4.1157 19.674C4.1157 20.494 4.7437 21.328 5.8657 21.15C7.9847 20.795 10.7867 18.607 11.7577 15.873H11.8537V26.004H7.8747C5.1267 26.004 3.1997 25.635 1.7777 24.213Z"
            fill={color}
          />
        </svg>
      )
    case "heavy":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 26.427734375 26.427734375"
          className={className}
        >
          <path
            d="              M24.5687 1.8868C26.0037 3.3088 26.4277 5.1958 26.4277 8.1898V12.2498H19.9197C21.1507 11.4028 21.9297 10.1038 21.9297 8.5588C21.9297 6.5628 20.3707 4.9488 18.2247 4.9488C16.6527 4.9488 15.3397 5.8108 14.4927 7.1918V-0.0002H18.2387C21.2187 -0.0002 23.1057 0.4508 24.5687 1.8868ZM11.4157 12.1958C9.1737 12.1958 7.3007 10.5548 7.3007 9.1058C7.3007 8.2718 7.8207 7.8068 8.6267 7.8068C10.2537 7.8068 11.6897 9.7618 11.6897 11.8808V12.1958ZM15.0117 12.1958H14.7387V11.8808C14.7387 9.7618 16.1737 7.8068 17.8007 7.8068C18.6077 7.8068 19.1267 8.2718 19.1267 9.1058C19.1267 10.5548 17.2537 12.1958 15.0117 12.1958ZM-0.0003 12.2498V8.1898C-0.0003 5.1958 0.4237 3.3218 1.8597 1.8868C3.3087 0.4508 5.2087 -0.0002 8.1757 -0.0002H11.9357V7.1918C11.0877 5.8108 9.7757 4.9488 8.2027 4.9488C6.0567 4.9488 4.4977 6.5628 4.4977 8.5588C4.4977 10.1038 5.2777 11.4028 6.5077 12.2498ZM20.3707 17.9508C18.7717 17.5818 16.8577 15.9828 16.1057 14.6428H26.4277V18.2518C26.4277 21.2458 26.0037 23.1058 24.5687 24.5548C23.1187 25.9898 21.2187 26.4278 18.2387 26.4278H14.4927V16.4338H14.5877C15.5587 19.0448 17.9377 20.9868 20.0017 21.3418C21.2737 21.5738 21.9707 20.6168 21.9707 19.6878C21.9707 18.7988 21.4097 18.2248 20.3707 17.9508ZM1.8597 24.5548C0.4237 23.1188 -0.0003 21.2458 -0.0003 18.2518V14.6428H10.3227C9.5707 15.9828 7.6567 17.5688 6.0567 17.9508C5.0177 18.2378 4.4567 18.7988 4.4567 19.6878C4.4567 20.6168 5.1677 21.5738 6.4257 21.3418C8.4907 20.9868 10.8687 19.0448 11.8397 16.4338H11.9357V26.4278H8.1897C5.2087 26.4278 3.3227 25.9898 1.8597 24.5548Z"
            fill={color}
          />
        </svg>
      )
    case "light":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24.6640625 24.6640625"
          className={className}
        >
          <path
            d="              M23.1327 1.5451C24.4047 2.8031 24.6637 4.5531 24.6637 7.0271V11.9221H17.5407C19.5237 11.1151 21.0277 9.5151 21.0277 7.6291C21.0277 5.5921 19.6187 4.1831 17.6637 4.1831C15.7777 4.1831 13.9867 5.5511 13.0427 7.6151V0.0001H17.6227C20.0977 0.0001 21.8617 0.2731 23.1327 1.5451ZM10.9927 11.7851C7.9567 11.7851 5.2637 9.7341 5.2637 7.7651C5.2637 6.5761 6.0017 5.8241 7.0957 5.8241C9.3377 5.8241 11.4027 8.4351 11.4027 11.4021V11.7851ZM13.6997 11.7851H13.2757V11.4021C13.2757 8.4351 15.3397 5.8241 17.5817 5.8241C18.6897 5.8241 19.4277 6.5761 19.4277 7.7651C19.4277 9.7341 16.7207 11.7851 13.6997 11.7851ZM-0.0003 11.9221V6.9451C-0.0003 4.5661 0.2737 2.8161 1.5317 1.5451C2.8027 0.2871 4.5667 0.0001 6.9457 0.0001H11.6347V7.6151C10.7047 5.5511 8.9137 4.1831 7.0277 4.1831C5.0727 4.1831 3.6507 5.5921 3.6507 7.6291C3.6507 9.5151 5.1677 11.1151 7.1367 11.9221ZM20.2477 18.4301C18.3207 18.1831 15.2437 15.4901 14.1367 13.2211H24.6637V17.6231C24.6637 20.1111 24.4047 21.8481 23.1327 23.1191C21.8747 24.3771 20.0977 24.6641 17.6227 24.6641H13.0427V14.1231H13.1247C14.4787 17.4861 18.0467 19.9471 20.1527 20.3161C20.8087 20.4121 21.2187 19.9201 21.2187 19.4281C21.2187 18.8671 20.8907 18.4981 20.2477 18.4301ZM1.5177 23.1191C0.2597 21.8611 -0.0003 20.1111 -0.0003 17.6231V13.2211H10.5547C9.4337 15.4901 6.3707 18.1701 4.4297 18.4301C3.7867 18.5121 3.4727 18.8671 3.4727 19.4281C3.4727 19.9201 3.8687 20.4121 4.5257 20.3161C6.6307 19.9471 10.2127 17.4861 11.5527 14.1231H11.6347V24.6641H7.0277C4.5527 24.6641 2.8027 24.3771 1.5177 23.1191Z"
            fill={color}
          />
        </svg>
      )
    case "medium":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 25.498046875 25.484375"
          className={className}
        >
          <path
            d="              M23.8297 1.6683C25.2387 3.0763 25.4977 5.0043 25.4977 7.4923V12.1683H18.8267C20.5217 11.3473 21.6837 9.8713 21.6837 8.1073C21.6837 6.0023 20.1117 4.4163 18.0057 4.4163C16.2287 4.4163 14.6697 5.4963 13.7407 7.2593V0.0003H17.9927C20.4807 0.0003 22.4217 0.2593 23.8297 1.6683ZM11.1017 12.0043C8.3807 12.0043 6.0567 10.1033 6.0567 8.3533C6.0567 7.3283 6.6997 6.6993 7.6837 6.6993C9.7347 6.6993 11.5117 8.9963 11.5117 11.6073V12.0043ZM14.3967 12.0043H13.9997V11.6073C13.9997 8.9963 15.7637 6.6993 17.8147 6.6993C18.8127 6.6993 19.4417 7.3283 19.4417 8.3533C19.4417 10.1033 17.1307 12.0043 14.3967 12.0043ZM-0.0003 12.1683V7.4653C-0.0003 5.0043 0.2597 3.0763 1.6677 1.6683C3.0627 0.2733 5.0177 0.0003 7.4647 0.0003H11.7717V7.2593C10.8277 5.4963 9.2697 4.4163 7.5057 4.4163C5.3867 4.4163 3.8147 6.0023 3.8147 8.1073C3.8147 9.8713 4.9767 11.3473 6.6857 12.1683ZM20.5347 18.2793C18.6207 18.0193 16.0237 15.6403 15.2027 13.9863H25.4977V17.9783C25.4977 20.4803 25.2387 22.4083 23.8297 23.8163C22.4217 25.2113 20.4807 25.4843 17.9927 25.4843H13.7407V15.1753H13.8357C14.8067 18.0883 18.1157 20.5623 20.3297 20.9043C21.2597 21.0413 21.8207 20.3573 21.8207 19.6463C21.8207 18.8813 21.3687 18.3883 20.5347 18.2793ZM1.6547 23.8163C0.2597 22.4083 -0.0003 20.4803 -0.0003 17.9783V13.9863H10.2947C9.4747 15.6403 6.8907 18.0063 4.9627 18.2793C4.1427 18.4023 3.6777 18.8813 3.6777 19.6463C3.6777 20.3573 4.2387 21.0413 5.1817 20.9043C7.3827 20.5623 10.7047 18.0883 11.6617 15.1753H11.7717V25.4843H7.5057C5.0177 25.4843 3.0767 25.2113 1.6547 23.8163Z"
            fill={color}
          />
        </svg>
      )
    case "regular":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 25.2109375 25.2109375"
          className={className}
        >
          <path
            d="              M23.6117 1.6136C25.0057 3.0076 25.2107 4.9496 25.2107 7.2876V12.1546H18.4847C20.3297 11.3336 21.6017 9.8166 21.6017 7.9706C21.6017 5.8376 20.0427 4.2656 17.9237 4.2656C16.1057 4.2656 14.4647 5.4006 13.5077 7.2876V-0.0004H17.9097C20.2477 -0.0004 22.2167 0.2186 23.6117 1.6136ZM11.0057 11.9496C8.1347 11.9496 5.6737 9.9806 5.6737 8.1346C5.6737 7.0546 6.3437 6.3576 7.3967 6.3576C9.5707 6.3576 11.4437 8.7636 11.4437 11.5256V11.9496ZM14.2047 11.9496H13.7677V11.5256C13.7677 8.7636 15.6547 6.3576 17.8147 6.3576C18.8677 6.3576 19.5367 7.0546 19.5367 8.1346C19.5367 9.9806 17.0897 11.9496 14.2047 11.9496ZM-0.0003 12.1546V7.2596C-0.0003 4.9626 0.2047 3.0076 1.5997 1.6136C2.9937 0.2186 4.9627 -0.0004 7.2597 -0.0004H11.7167V7.2876C10.7597 5.4006 9.1187 4.2656 7.2867 4.2656C5.1817 4.2656 3.6097 5.8376 3.6097 7.9706C3.6097 9.8166 4.8807 11.3336 6.7407 12.1546ZM20.5897 18.3886C18.5667 18.1696 15.7637 15.5446 14.9157 13.7946H25.2107V17.9106C25.2107 20.2476 25.0057 22.2036 23.6117 23.5976C22.2167 24.9926 20.2477 25.2106 17.9097 25.2106H13.5077V14.8066H13.6037C14.5607 17.8006 18.1697 20.4536 20.4257 20.7816C21.2597 20.8906 21.7797 20.2886 21.7797 19.6466C21.7797 18.9216 21.3557 18.4566 20.5897 18.3886ZM1.5997 23.5976C0.2047 22.2036 -0.0003 20.2476 -0.0003 17.9106V13.7946H10.2947C9.4477 15.5446 6.6447 18.1426 4.6207 18.3886C3.8687 18.4706 3.4457 18.9216 3.4457 19.6466C3.4457 20.2886 3.9647 20.8906 4.7987 20.7816C7.0407 20.4536 10.6507 17.8006 11.6077 14.8066H11.7167V25.2106H7.2867C4.9627 25.2106 2.9937 24.9926 1.5997 23.5976Z"
            fill={color}
          />
        </svg>
      )
    case "semibold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 25.716796875 25.716796875"
          className={className}
        >
          <path
            d="              M24.0077 1.7363C25.4157 3.1313 25.7167 5.0583 25.7167 7.6703V12.1953H19.0857C20.6717 11.3753 21.7387 9.9393 21.7387 8.2163C21.7387 6.1383 20.1797 4.5523 18.0607 4.5523C16.3247 4.5523 14.8337 5.5783 13.9177 7.2463V0.0003H18.0467C20.6447 0.0003 22.5857 0.3143 24.0077 1.7363ZM11.1837 12.0583C8.5727 12.0583 6.3577 10.2133 6.3577 8.5453C6.3577 7.5603 6.9587 6.9723 7.9027 6.9723C9.8577 6.9723 11.5527 9.1873 11.5527 11.6753V12.0583ZM14.5467 12.0583H14.1637V11.6753C14.1637 9.1873 15.8597 6.9723 17.8147 6.9723C18.7577 6.9723 19.3597 7.5603 19.3597 8.5453C19.3597 10.2133 17.1587 12.0583 14.5467 12.0583ZM-0.0003 12.1953V7.6423C-0.0003 5.0583 0.3007 3.1443 1.7087 1.7363C3.1177 0.3143 5.0727 0.0003 7.6427 0.0003H11.8127V7.2463C10.8967 5.5783 9.3927 4.5523 7.6697 4.5523C5.5367 4.5523 3.9787 6.1383 3.9787 8.2163C3.9787 9.9393 5.0447 11.3753 6.6447 12.1953ZM20.5077 18.2113C18.6617 17.9233 16.2287 15.7223 15.4217 14.1503H25.7167V18.0603C25.7167 20.6723 25.4157 22.5863 24.0077 23.9943C22.5857 25.4023 20.6447 25.7163 18.0467 25.7163H13.9177V15.4903H14.0137C14.9847 18.3203 18.0747 20.6723 20.2477 21.0133C21.2597 21.1773 21.8477 20.4253 21.8477 19.6733C21.8477 18.8673 21.3687 18.3613 20.5077 18.2113ZM1.7087 23.9943C0.3007 22.5863 -0.0003 20.6723 -0.0003 18.0603V14.1503H10.3087C9.5017 15.7223 7.0687 17.9103 5.2227 18.2113C4.3477 18.3753 3.8687 18.8673 3.8687 19.6733C3.8687 20.4253 4.4567 21.1773 5.4687 21.0133C7.6427 20.6723 10.7457 18.3203 11.7027 15.4903H11.8127V25.7163H7.6697C5.0587 25.7163 3.1307 25.4023 1.7087 23.9943Z"
            fill={color}
          />
        </svg>
      )
    case "thin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 23.939453125 23.92578125"
          className={className}
        >
          <path
            d="              M22.5037 1.436C23.5977 2.516 23.9397 4.006 23.9397 6.686V11.594H16.3107C18.4437 10.814 20.2757 9.133 20.2757 7.164C20.2757 5.264 19.0587 4.061 17.3087 4.061C15.3397 4.061 13.3577 5.729 12.4417 8.039V0H17.2407C19.9197 0 21.3967 0.342 22.5037 1.436ZM10.9517 11.58C7.7387 11.58 4.7027 9.406 4.7027 7.26C4.7027 5.947 5.5367 5.1 6.6997 5.1C9.0367 5.1 11.3477 7.984 11.3477 11.211V11.58ZM13.0157 11.58H12.6327V11.211C12.6327 7.984 14.9297 5.1 17.2817 5.1C18.4437 5.1 19.2637 5.947 19.2637 7.26C19.2637 9.406 16.2427 11.58 13.0157 11.58ZM-0.0003 11.594V6.535C-0.0003 4.033 0.3417 2.543 1.4357 1.449C2.5297 0.355 4.0467 0 6.5487 0H11.5257V8.039C10.6227 5.729 8.6407 4.061 6.6717 4.061C4.9217 4.061 3.7047 5.264 3.7047 7.164C3.7047 9.133 5.5367 10.814 7.6697 11.594ZM19.7967 18.498C17.9787 18.184 14.5607 15.408 13.0837 12.455H23.9397V17.24C23.9397 19.92 23.5977 21.396 22.5037 22.49C21.4097 23.584 19.9197 23.926 17.2407 23.926H12.4417V13.207H12.4957C14.3557 17.063 17.8967 19.291 19.7967 19.701C20.2207 19.783 20.4667 19.441 20.4667 19.127C20.4667 18.785 20.2887 18.566 19.7967 18.498ZM1.4217 22.49C0.3277 21.41 -0.0003 19.92 -0.0003 17.24V12.455H10.8827C9.4197 15.408 6.0017 18.184 4.1837 18.498C3.6917 18.566 3.5137 18.785 3.5137 19.127C3.5137 19.441 3.7597 19.783 4.1837 19.701C6.0837 19.291 9.6247 17.063 11.4847 13.207H11.5257V23.926H6.6857C4.0197 23.926 2.5297 23.584 1.4217 22.49Z"
            fill={color}
          />
        </svg>
      )
    case "ultralight":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 23.556640625 23.5703125"
          className={className}
        >
          <path
            d="              M22.1897 1.3942C23.1877 2.3792 23.5567 3.7323 23.5567 6.5083V11.4293H15.6677C17.8967 10.6642 19.8787 8.9413 19.8787 6.9453C19.8787 5.0993 18.7717 4.0063 17.1177 4.0063C15.1077 4.0063 13.0297 5.8383 12.1407 8.2713V0.0003H17.0487C19.8107 0.0003 21.1637 0.3833 22.1897 1.3942ZM10.9377 11.4703C7.6157 11.4703 4.4297 9.2563 4.4297 7.0133C4.4297 5.6333 5.3047 4.7303 6.4937 4.7303C8.8867 4.7303 11.3207 7.7653 11.3207 11.1293V11.4703ZM12.6737 11.4703H12.2907V11.1293C12.2907 7.7653 14.7247 4.7303 17.1177 4.7303C18.3067 4.7303 19.1957 5.6333 19.1957 7.0133C19.1957 9.2563 15.9957 11.4703 12.6737 11.4703ZM-0.0003 11.4293V6.3302C-0.0003 3.7602 0.3827 2.4202 1.3947 1.4082C2.3927 0.4103 3.7867 0.0003 6.3297 0.0003H11.4847V8.2713C10.5957 5.8383 8.5037 4.0063 6.4937 4.0063C4.8397 4.0063 3.7327 5.0993 3.7327 6.9453C3.7327 8.9413 5.7287 10.6642 7.9437 11.4293ZM19.5647 18.5393C17.8007 18.1973 14.2047 15.3673 12.5507 12.0863H23.5567V17.0493C23.5567 19.8383 23.1877 21.1643 22.1897 22.1763C21.1777 23.1743 19.8107 23.5703 17.0487 23.5703H12.1407V12.7563H12.1677C14.2867 16.8573 17.8147 18.9633 19.6187 19.4003C19.9197 19.4683 20.0837 19.2093 20.0837 18.9903C20.0837 18.7583 19.9747 18.6073 19.5647 18.5393ZM1.3807 22.1763C0.3687 21.1913 -0.0003 19.8383 -0.0003 17.0493V12.0863H11.0607C9.4067 15.3673 5.8107 18.1973 4.0607 18.5393C3.6367 18.6073 3.5277 18.7583 3.5277 18.9903C3.5277 19.2093 3.6917 19.4683 4.0057 19.4003C5.8107 18.9633 9.3247 16.8573 11.4437 12.7563H11.4847V23.5703H6.5077C3.7457 23.5703 2.3927 23.1743 1.3807 22.1763Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}