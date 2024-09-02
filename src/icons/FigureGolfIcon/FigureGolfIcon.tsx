import { IconProps } from "../../types"

export default function FigureGolfIconIcon({
  weight = "regular",
  color = "#000000",
  className = "",
}: IconProps) {
  switch (weight) {
    case "black":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 21.176484432428147 40.026638227239424"
          className={className}
        >
          <path
            d="              M9.1557 40.0174C10.1267 40.0174 10.9337 39.2244 10.9337 38.2404V31.0894L13.5727 27.1934C13.7907 26.8654 14.2147 26.9884 14.2697 27.3574L14.6657 30.6254C14.6937 30.8844 14.7477 31.0624 14.8577 31.3364L17.7007 38.8694C18.1117 39.9624 19.1917 40.2094 19.9977 39.9084C20.8047 39.6074 21.4607 38.7324 21.0507 37.6114L18.2477 30.1874V16.4614C18.2477 14.8474 17.5507 13.0974 15.9097 12.4004L14.9937 11.9904C13.2167 11.2384 11.5077 11.4984 10.0037 12.5784L6.7227 14.9434L3.7147 13.6714L11.0837 3.4454H13.3397C14.2827 3.4454 15.0627 2.6524 15.0627 1.7364C15.0627 0.7654 14.2827 0.0004 13.3397 0.0004H10.9337C10.5367 0.0004 10.0857 0.1914 9.8397 0.5464L0.4607 13.4804C-0.3593 14.6154 -0.0453 15.9414 1.0897 16.4334L6.2437 18.6624C6.5177 18.7714 6.7497 18.7714 7.0917 18.7714H10.5777C10.9477 18.7714 11.0157 18.9084 11.0157 19.2224V23.1604L7.5427 29.7094C7.3927 29.9964 7.3517 30.2554 7.3517 30.5564V38.2404C7.3517 39.2244 8.1447 40.0174 9.1557 40.0174ZM17.0177 10.8284C18.9177 10.8284 20.4627 9.2834 20.4627 7.3694C20.4627 5.4824 18.9177 3.9234 17.0177 3.9234C15.1167 3.9234 13.5587 5.4824 13.5587 7.3694C13.5587 9.2834 15.1167 10.8284 17.0177 10.8284Z"
            fill={color}
          />
        </svg>
      )
    case "bold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20.26353049378758 38.39014998922398"
          className={className}
        >
          <path
            d="              M8.7243 38.3774C9.5993 38.3774 10.3103 37.6794 10.3103 36.7914V29.8044L13.2223 25.4984C13.4003 25.2524 13.7553 25.3344 13.7963 25.6344L14.2343 29.3804C14.2613 29.6274 14.3163 29.7774 14.4113 30.0374L17.1873 37.3654C17.5563 38.3364 18.4993 38.5544 19.2103 38.2814C19.9493 38.0074 20.5093 37.2424 20.1543 36.2444L17.4193 29.0114V15.6274C17.4193 14.0954 16.7633 12.4684 15.2453 11.8264L14.3433 11.4434C12.6753 10.7464 11.0763 10.9644 9.6543 11.9904L6.3863 14.3284L3.0783 12.9334L10.3513 2.8434H12.6753C13.4543 2.8434 14.0973 2.1874 14.0973 1.4354C14.0973 0.6284 13.4543 0.0004 12.6753 0.0004H10.3373C10.0233 0.0004 9.6673 0.1504 9.4623 0.4374L0.3703 13.0024C-0.2717 13.8904 -0.0667 15.0394 0.8903 15.4494L5.9623 17.6234C6.2083 17.7324 6.4003 17.7324 6.7283 17.7324H10.1193C10.5703 17.7324 10.6793 17.9644 10.6793 18.3204V22.1754L7.3023 28.5744C7.1653 28.8474 7.1243 29.0524 7.1243 29.3394V36.7914C7.1243 37.6794 7.8353 38.3774 8.7243 38.3774ZM16.1073 10.2534C17.8703 10.2534 19.3203 8.8044 19.3203 7.0134C19.3203 5.2504 17.8703 3.8004 16.1073 3.8004C14.3163 3.8004 12.8803 5.2504 12.8803 7.0134C12.8803 8.8044 14.3163 10.2534 16.1073 10.2534Z"
            fill={color}
          />
        </svg>
      )
    case "heavy":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20.7379648359204 39.25030510675633"
          className={className}
        >
          <path
            d="              M8.9515 39.2379C9.8815 39.2379 10.6475 38.4859 10.6475 37.5569V30.4879L13.4085 26.3869C13.6005 26.0999 13.9965 26.2089 14.0375 26.5509L14.4615 30.0369C14.4895 30.2969 14.5435 30.4469 14.6395 30.7209L17.4555 38.1579C17.8525 39.1969 18.8645 39.4159 19.6295 39.1429C20.3955 38.8419 21.0105 38.0219 20.6145 36.9689L17.8525 29.6269V16.0649C17.8525 14.4919 17.1825 12.7969 15.5965 12.1269L14.6805 11.7309C12.9575 11.0059 11.3035 11.2379 9.8405 12.2909L6.5595 14.6559L3.4145 13.3159L10.7425 3.1579H13.0265C13.8875 3.1579 14.6125 2.4339 14.6125 1.5859C14.6125 0.6969 13.8875 -0.0001 13.0265 -0.0001H10.6475C10.2915 -0.0001 9.8955 0.1639 9.6625 0.4919L0.4205 13.2479C-0.3175 14.2729 -0.0575 15.5039 0.9945 15.9689L6.1085 18.1699C6.3675 18.2789 6.5865 18.2789 6.9145 18.2789H10.3605C10.7705 18.2789 10.8525 18.4569 10.8525 18.7989V22.6949L7.4345 29.1759C7.2835 29.4489 7.2425 29.6819 7.2425 29.9819V37.5569C7.2425 38.4859 7.9945 39.2379 8.9515 39.2379ZM16.5805 10.5549C18.4125 10.5549 19.9165 9.0509 19.9165 7.2049C19.9165 5.3729 18.4125 3.8689 16.5805 3.8689C14.7355 3.8689 13.2315 5.3729 13.2315 7.2049C13.2315 9.0509 14.7355 10.5549 16.5805 10.5549Z"
            fill={color}
          />
        </svg>
      )
    case "light":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 18.827885679789734 35.72270020013582"
          className={className}
        >
          <path
            d="              M8.0918 35.7109C8.8168 35.7109 9.4318 35.1089 9.4318 34.3709V27.7269L12.5898 23.0779C12.6858 22.9139 12.9178 22.9549 12.9458 23.1599L13.4378 27.3439C13.4648 27.5759 13.5058 27.6989 13.6018 27.9449L16.2268 34.8499C16.5408 35.6839 17.3208 35.8609 17.9358 35.6289C18.5648 35.3969 19.0428 34.7539 18.7288 33.9059L16.1308 27.0429V14.3689C16.1308 12.9609 15.5428 11.4839 14.1758 10.9239L13.3278 10.5679C11.7968 9.9399 10.3478 10.1309 9.0488 11.0469L5.8908 13.3299L2.1168 11.7309L9.1858 1.9139H11.6188C12.1658 1.9139 12.5898 1.4769 12.5898 0.9569C12.5898 0.4099 12.1658 -0.0001 11.6188 -0.0001H9.3638C9.1448 -0.0001 8.9528 0.1089 8.8298 0.2739L0.2718 12.1129C-0.1792 12.7419 -0.0972 13.7129 0.7368 14.0679L5.5218 16.1189C5.7408 16.2009 5.8908 16.2149 6.1918 16.2149H9.4048C9.9098 16.2149 10.0748 16.5569 10.0748 16.9119V20.6039L6.8748 26.6879C6.7518 26.9059 6.7248 27.0699 6.7248 27.3299V34.3709C6.7248 35.1089 7.3258 35.7109 8.0918 35.7109ZM14.8868 9.2289C16.4728 9.2289 17.7718 7.9299 17.7718 6.3159C17.7718 4.7309 16.4728 3.4179 14.8868 3.4179C13.2598 3.4179 11.9608 4.7309 11.9608 6.3159C11.9608 7.9299 13.2598 9.2289 14.8868 9.2289Z"
            fill={color}
          />
        </svg>
      )
    case "medium":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 19.669881931968373 37.34060970514079"
          className={className}
        >
          <path
            d="              M8.4471 37.3242C9.2401 37.3242 9.9091 36.6812 9.9091 35.8752V28.9842L12.9991 24.4182C13.1361 24.2132 13.4501 24.2672 13.4781 24.5412L13.9561 28.5882C13.9841 28.8202 14.0251 28.9572 14.1201 29.2172L16.8551 36.3942C17.1971 37.2972 18.0441 37.4882 18.7001 37.2422C19.3841 36.9822 19.9041 36.2852 19.5621 35.3692L16.8681 28.2462V15.0942C16.8681 13.6172 16.2531 12.0582 14.8041 11.4572L13.9291 11.0882C12.3021 10.4182 10.7841 10.6232 9.4171 11.6072L6.1631 13.9452L2.6501 12.4692L9.8821 2.4472H12.2471C12.9171 2.4472 13.4641 1.8862 13.4641 1.2302C13.4641 0.5472 12.9171 0.0002 12.2471 0.0002H9.9501C9.6771 0.0002 9.3901 0.1362 9.2261 0.3552L0.3121 12.7012C-0.2209 13.4392 -0.0709 14.4652 0.7631 14.8202L5.7671 16.9672C5.9991 17.0622 6.1771 17.0762 6.4781 17.0762H9.8141C10.3201 17.0762 10.4701 17.3772 10.4701 17.7462V21.5472L7.1341 27.8632C7.0111 28.1092 6.9841 28.2872 6.9841 28.5602V35.8752C6.9841 36.6812 7.6261 37.3242 8.4471 37.3242ZM15.5151 9.8712C17.1971 9.8712 18.5771 8.5042 18.5771 6.7952C18.5771 5.1132 17.1971 3.7322 15.5151 3.7322C13.8061 3.7322 12.4251 5.1132 12.4251 6.7952C12.4251 8.5042 13.8061 9.8712 15.5151 9.8712Z"
            fill={color}
          />
        </svg>
      )
    case "regular":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 19.34061589731522 36.73392910857813"
          className={className}
        >
          <path
            d="              M8.2984 36.7228C9.0504 36.7228 9.6794 36.1078 9.6794 35.3418V28.5198L12.8784 23.8028C13.0014 23.6118 13.2754 23.6658 13.3024 23.9118L13.7944 28.1228C13.8224 28.3558 13.8634 28.4788 13.9724 28.7388L16.6654 35.8338C16.9934 36.6958 17.7864 36.8728 18.4294 36.6408C19.0724 36.3948 19.5644 35.7388 19.2364 34.8638L16.5834 27.8088V14.7928C16.5834 13.3298 15.9684 11.8128 14.5604 11.2378L13.6994 10.8828C12.1134 10.2268 10.6224 10.4178 9.2834 11.3748L6.0424 13.7128L2.4194 12.1818L9.6114 2.2148H12.0034C12.6184 2.2148 13.1244 1.7088 13.1244 1.1078C13.1244 0.4788 12.6184 -0.0002 12.0034 -0.0002H9.7344C9.4884 -0.0002 9.2424 0.1098 9.0914 0.3148L0.2864 12.5098C-0.1916 13.1658 -0.0826 14.1228 0.6974 14.4508L5.6734 16.5838C5.8924 16.6658 6.0424 16.6798 6.3574 16.6798H9.6524C10.1714 16.6798 10.3494 17.0218 10.3494 17.4048V21.1918L7.0544 27.4398C6.9314 27.6718 6.9044 27.8498 6.9044 28.1098V35.3418C6.9044 36.1078 7.5194 36.7228 8.2984 36.7228ZM15.1894 9.6528C16.8294 9.6528 18.1564 8.3128 18.1564 6.6448C18.1564 5.0178 16.8294 3.6778 15.1894 3.6778C13.5214 3.6778 12.1814 5.0178 12.1814 6.6448C12.1814 8.3128 13.5214 9.6528 15.1894 9.6528Z"
            fill={color}
          />
        </svg>
      )
    case "semibold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 19.922095326362196 37.783469068078766"
          className={className}
        >
          <path
            d="              M8.5726 37.762C9.3926 37.762 10.0766 37.105 10.0766 36.258V29.326L13.0976 24.883C13.2476 24.65 13.5766 24.719 13.6176 25.006L14.0686 28.916C14.1096 29.162 14.1506 29.299 14.2456 29.559L16.9936 36.805C17.3496 37.734 18.2386 37.939 18.9216 37.68C19.6186 37.42 20.1656 36.682 19.8106 35.738L17.1036 28.561V15.313C17.1036 13.809 16.4746 12.223 14.9976 11.607L14.1096 11.238C12.4686 10.555 10.9096 10.76 9.5156 11.758L6.2616 14.096L2.8296 12.66L10.0766 2.611H12.4276C13.1526 2.611 13.7406 2.01 13.7406 1.313C13.7406 0.574 13.1526 0 12.4276 0H10.1176C9.8296 0 9.5156 0.137 9.3376 0.383L0.3416 12.824C-0.2464 13.631 -0.0684 14.697 0.8206 15.08L5.8516 17.24C6.0976 17.336 6.2756 17.35 6.5896 17.35H9.9396C10.4176 17.35 10.5546 17.623 10.5546 17.979V21.807L7.2046 28.164C7.0816 28.41 7.0406 28.615 7.0406 28.889V36.258C7.0406 37.105 7.7106 37.762 8.5726 37.762ZM15.7636 10.021C17.4866 10.021 18.8946 8.627 18.8946 6.877C18.8946 5.154 17.4866 3.76 15.7636 3.76C14.0276 3.76 12.6186 5.154 12.6186 6.877C12.6186 8.627 14.0276 10.021 15.7636 10.021Z"
            fill={color}
          />
        </svg>
      )
    case "thin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 18.15662904401574 34.410701283990136"
          className={className}
        >
          <path
            d="              M7.8072 34.3847C8.5182 34.3847 9.1062 33.8107 9.1062 33.0997V26.7007L12.2092 22.1347C12.2912 22.0117 12.4552 22.0527 12.4692 22.1897L12.9612 26.3317C12.9892 26.5507 13.0302 26.6737 13.1252 26.9067L15.6412 33.5647C15.9552 34.3707 16.6942 34.5487 17.2952 34.3167C17.9102 34.0837 18.3622 33.4547 18.0612 32.6487L15.5592 26.0447V13.8357C15.5592 12.4687 14.9852 11.0467 13.6722 10.5137L12.8522 10.1717C11.3752 9.5707 9.9812 9.7477 8.7372 10.6367L5.7022 12.8247L1.7092 11.1427L8.6412 1.5317H11.1292C11.5532 1.5317 11.8952 1.1897 11.8952 0.7797C11.8952 0.3417 11.5532 -0.0003 11.1292 -0.0003H8.8732C8.7092 -0.0003 8.5732 0.1097 8.4912 0.2187L0.2602 11.5937C-0.1638 12.1957 -0.1228 13.1797 0.7802 13.5627L5.3462 15.5177C5.5512 15.5997 5.7022 15.6137 5.9752 15.6137H9.0782C9.5712 15.6137 9.7352 15.9417 9.7352 16.2967V19.8247L6.6452 25.6897C6.5352 25.9087 6.4942 26.0727 6.4942 26.3187V33.0997C6.4942 33.8107 7.0822 34.3847 7.8072 34.3847ZM14.4792 8.6957C16.0102 8.6957 17.2682 7.4377 17.2682 5.8787C17.2682 4.3617 16.0102 3.1037 14.4792 3.1037C12.9342 3.1037 11.6762 4.3617 11.6762 5.8787C11.6762 7.4377 12.9342 8.6957 14.4792 8.6957Z"
            fill={color}
          />
        </svg>
      )
    case "ultralight":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 17.811214273349833 33.70782152778409"
          className={className}
        >
          <path
            d="              M7.6664 33.6872C8.3644 33.6872 8.9384 33.1272 8.9384 32.4292V26.1682L12.0004 21.6292C12.0694 21.5192 12.2054 21.5602 12.2334 21.6832L12.7114 25.7992C12.7394 26.0042 12.7804 26.1272 12.8754 26.3592L15.3504 32.8812C15.6374 33.6742 16.3754 33.8382 16.9634 33.6192C17.5654 33.3872 18.0164 32.7852 17.7154 31.9782L15.2544 25.5122V13.5492C15.2544 12.2092 14.7074 10.8142 13.4084 10.2952L12.6154 9.9532C11.1664 9.3652 9.7854 9.5432 8.5694 10.4182L5.5884 12.5512L1.5004 10.8282L8.3504 1.3262H10.8654C11.2484 1.3262 11.5354 1.0252 11.5354 0.6702C11.5354 0.2872 11.2484 0.0002 10.8654 0.0002H8.6104C8.4734 0.0002 8.3774 0.0952 8.3094 0.1782L0.2564 11.3202C-0.1536 11.8942 -0.1396 12.8792 0.8034 13.2892L5.2464 15.1892C5.4514 15.2712 5.5884 15.2852 5.8754 15.2852H8.8974C9.3894 15.2852 9.5394 15.5992 9.5394 15.9552V19.4142L6.5184 25.1702C6.4084 25.3752 6.3674 25.5392 6.3674 25.7712V32.4292C6.3674 33.1272 6.9554 33.6872 7.6664 33.6872ZM14.2704 8.3942C15.7744 8.3942 17.0044 7.1642 17.0044 5.6462C17.0044 4.1422 15.7744 2.9122 14.2704 2.9122C12.7524 2.9122 11.5224 4.1422 11.5224 5.6462C11.5224 7.1642 12.7524 8.3942 14.2704 8.3942Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}