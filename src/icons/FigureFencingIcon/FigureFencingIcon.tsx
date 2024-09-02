import { IconProps } from "../../types"

export default function FigureFencingIconIcon({
  weight = "regular",
  color = "#000000",
  className = "",
}: IconProps) {
  switch (weight) {
    case "black":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24.57605020826265 36.18288153577819"
          className={className}
        >
          <path
            d="              M19.7287 15.1344H23.6527C24.3767 15.1344 24.7457 14.5054 24.4997 13.8224C24.2537 13.1114 23.7347 12.4964 23.0507 12.1404V1.3534C23.0507 0.6154 22.4357 0.0004 21.6977 0.0004C20.9587 0.0004 20.3437 0.6154 20.3437 1.3534V12.1404C19.6597 12.4964 19.1267 13.1114 18.8677 13.8494C18.6347 14.5744 19.0727 15.1344 19.7287 15.1344ZM12.2227 7.6834C14.1227 7.6834 15.6817 6.1384 15.6817 4.2384C15.6817 2.3384 14.1227 0.7794 12.2227 0.7794C10.3227 0.7794 8.7637 2.3384 8.7637 4.2384C8.7637 6.1384 10.3227 7.6834 12.2227 7.6834ZM1.6547 35.9844C2.4067 36.3674 3.5277 36.2304 4.0467 35.2734L7.7247 28.6834L9.6387 24.4044C9.7347 24.1724 9.9937 24.1174 10.1857 24.2544L15.3397 27.9864V34.3984C15.3397 35.3824 16.1467 36.1754 17.1447 36.1754C18.1287 36.1754 18.9217 35.3824 18.9217 34.3984V27.1794C18.9217 26.7014 18.7847 26.1544 18.3747 25.7714L12.4547 20.1794L12.8657 16.8304C12.8787 16.7074 13.0707 16.6934 13.1247 16.8304L14.0137 18.9904C14.3147 19.6734 14.9437 20.0844 15.6677 20.0844H21.8747C22.8597 20.0844 23.6527 19.3044 23.6527 18.3064C23.6527 17.3084 22.8597 16.5294 21.8747 16.5294H16.8437L14.8207 11.7984C14.2457 10.4454 13.3297 9.6794 11.4157 9.1324L10.5547 8.8864C8.5317 8.3124 7.0547 8.2304 5.3457 8.9554L3.5687 9.7204V4.7714C3.5687 3.8144 2.7617 3.0074 1.7777 3.0074C0.7927 3.0074 -0.0003 3.8144 -0.0003 4.7714V12.6194C-0.0003 13.9184 1.3397 14.5884 2.4887 14.0824L6.2067 12.4684C6.3707 12.4004 6.4667 12.4964 6.4397 12.6324L4.4297 27.2484L0.9297 33.5374C0.4647 34.3984 0.7517 35.5194 1.6547 35.9844Z"
            fill={color}
          />
        </svg>
      )
    case "bold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 23.58979036831674 34.654661704017336"
          className={className}
        >
          <path
            d="              M19.0177 14.4921H22.8597C23.4477 14.4921 23.7207 14.0001 23.5297 13.4531C23.2837 12.7011 22.7087 12.0861 21.9977 11.7851V1.0531C21.9977 0.4651 21.5197 0.0001 20.9457 0.0001C20.3577 0.0001 19.8787 0.4651 19.8787 1.0531V11.7851C19.1677 12.0861 18.5937 12.7011 18.3337 13.4531C18.1427 14.0271 18.4567 14.4921 19.0177 14.4921ZM11.5797 7.2321C13.3577 7.2321 14.7927 5.7831 14.7927 4.0061C14.7927 2.2281 13.3577 0.7931 11.5797 0.7931C9.8027 0.7931 8.3537 2.2281 8.3537 4.0061C8.3537 5.7831 9.8027 7.2321 11.5797 7.2321ZM1.5317 34.4801C2.2017 34.8221 3.1997 34.6851 3.6637 33.8521L7.2187 27.4391L9.2017 23.0101C9.2697 22.8591 9.4607 22.8051 9.6117 22.9141L14.9157 26.7561V33.0721C14.9157 33.9471 15.6267 34.6441 16.5017 34.6441C17.3907 34.6441 18.0877 33.9471 18.0877 33.0721V26.0591C18.0877 25.6211 17.9647 25.1291 17.6097 24.8011L11.7847 19.3051L12.2637 15.4631C12.2777 15.3261 12.4827 15.3121 12.5367 15.4491L13.6177 18.0331C13.8767 18.6481 14.4377 19.0181 15.0797 19.0181H21.1097C21.9847 19.0181 22.6957 18.3201 22.6957 17.4321C22.6957 16.5571 21.9847 15.8461 21.1097 15.8461H16.1187L14.1227 11.1701C13.5767 9.8981 12.7427 9.1741 10.9097 8.6541L10.0767 8.4221C8.1077 7.8751 6.7267 7.7931 5.0997 8.4761L3.1587 9.3101V4.2791C3.1587 3.4321 2.4477 2.7211 1.5857 2.7211C0.6977 2.7211 -0.0003 3.4321 -0.0003 4.2791V11.8941C-0.0003 13.0431 1.1757 13.6441 2.2017 13.1931L6.0297 11.5391C6.1937 11.4711 6.3167 11.5661 6.2887 11.7301L4.3067 26.1821L0.8887 32.3201C0.4787 33.0721 0.7387 34.0701 1.5317 34.4801Z"
            fill={color}
          />
        </svg>
      )
    case "heavy":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24.116193627321408 35.45775759592257"
          className={className}
        >
          <path
            d="              M19.4007 14.8342H23.2697C23.9397 14.8342 24.2677 14.2602 24.0487 13.6442C23.7887 12.9062 23.2427 12.3042 22.5447 11.9762V1.2172C22.5447 0.5472 22.0117 0.0002 21.3417 0.0002C20.6717 0.0002 20.1247 0.5472 20.1247 1.2172V11.9632C19.4277 12.3042 18.8807 12.9202 18.6207 13.6582C18.4027 14.3142 18.7847 14.8342 19.4007 14.8342ZM11.9217 7.4652C13.7537 7.4652 15.2577 5.9742 15.2577 4.1292C15.2577 2.2832 13.7537 0.7792 11.9217 0.7792C10.0767 0.7792 8.5727 2.2832 8.5727 4.1292C8.5727 5.9742 10.0767 7.4652 11.9217 7.4652ZM1.5997 35.2732C2.3107 35.6292 3.3637 35.5062 3.8687 34.5902L7.4927 28.0952L9.4337 23.7482C9.5157 23.5432 9.7477 23.5022 9.9117 23.6112L15.1487 27.3982V33.7692C15.1487 34.7132 15.9007 35.4512 16.8437 35.4512C17.7867 35.4512 18.5257 34.7132 18.5257 33.7692V26.6462C18.5257 26.1812 18.4027 25.6762 18.0057 25.3062L12.1407 19.7692L12.5777 16.1872C12.5917 16.0512 12.7967 16.0372 12.8517 16.1742L13.8227 18.5392C14.1097 19.1812 14.7107 19.5782 15.3807 19.5782H21.5197C22.4497 19.5782 23.2017 18.8262 23.2017 17.8962C23.2017 16.9532 22.4497 16.2012 21.5197 16.2012H16.5017L14.4927 11.4982C13.9317 10.1852 13.0567 9.4332 11.1697 8.9002L10.3357 8.6682C8.3267 8.1072 6.9047 8.0112 5.2227 8.7362L3.3767 9.5292V4.5392C3.3767 3.6362 2.6117 2.8712 1.6817 2.8712C0.7517 2.8712 -0.0003 3.6362 -0.0003 4.5392V12.2772C-0.0003 13.5082 1.2577 14.1362 2.3517 13.6722L6.1247 12.0312C6.2887 11.9632 6.3987 12.0452 6.3707 12.2092L4.3747 26.7422L0.9157 32.9632C0.4647 33.7692 0.7387 34.8362 1.5997 35.2732Z"
            fill={color}
          />
        </svg>
      )
    case "light":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 22.013716486994866 32.046875"
          className={className}
        >
          <path
            d="              M17.7597 13.3572H21.5057C21.9567 13.3572 22.0937 12.9882 21.9707 12.6332C21.6837 11.7992 21.0407 11.1832 20.2477 10.9782V0.6152C20.2477 0.2732 19.9747 0.0002 19.6327 0.0002C19.2907 0.0002 19.0177 0.2732 19.0177 0.6152V10.9782C18.2247 11.1832 17.5817 11.7992 17.2947 12.6332C17.1717 12.9882 17.3087 13.3572 17.7597 13.3572ZM10.6507 6.3032C12.2367 6.3032 13.5347 5.0042 13.5347 3.3902C13.5347 1.7912 12.2367 0.4922 10.6507 0.4922C9.0237 0.4922 7.7247 1.7912 7.7247 3.3902C7.7247 5.0042 9.0237 6.3032 10.6507 6.3032ZM1.3677 31.8832C1.9417 32.1972 2.8027 32.0742 3.1857 31.3632L6.5487 25.3062L8.5447 20.8362C8.5727 20.7542 8.6817 20.7262 8.7637 20.7812L14.0957 24.6642V30.6932C14.0957 31.4452 14.6977 32.0472 15.4497 32.0472C16.2017 32.0472 16.7887 31.4452 16.7887 30.6932V24.0762C16.7887 23.6792 16.6797 23.2832 16.3787 23.0102L10.8277 17.7602L11.3477 13.5352C11.3617 13.3852 11.5797 13.3712 11.6207 13.5082L12.8517 16.4332C13.0707 16.9532 13.5627 17.2672 14.0957 17.2672H19.7967C20.5347 17.2672 21.1507 16.6792 21.1507 15.9282C21.1507 15.1762 20.5347 14.5882 19.7967 14.5882H14.9847L13.0567 10.0622C12.5647 8.9002 11.8127 8.2442 10.1177 7.7792L9.3377 7.5602C7.4927 7.0412 6.2347 6.9722 4.7437 7.6152L2.6937 8.4902V3.5002C2.6937 2.7752 2.0777 2.1742 1.3397 2.1742C0.6017 2.1742 -0.0003 2.7752 -0.0003 3.5002V10.6912C-0.0003 11.6622 0.9977 12.1682 1.8727 11.7852L5.6877 10.1312C5.8517 10.0622 6.0017 10.1582 5.9747 10.3492L4.0747 24.2402L0.8337 30.0642C0.4787 30.6932 0.6977 31.5542 1.3677 31.8832Z"
            fill={color}
          />
        </svg>
      )
    case "medium":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 22.967633180469974 33.6799344787906"
          className={className}
        >
          <path
            d="              M18.5527 14.0959H22.3397C22.8597 14.0959 23.0777 13.6719 22.9137 13.2069C22.6547 12.4419 22.0527 11.8399 21.3147 11.5799V0.8609C21.3147 0.3829 20.9317 -0.0001 20.4527 -0.0001C19.9747 -0.0001 19.5917 0.3829 19.5917 0.8609V11.5799C18.8397 11.8399 18.2517 12.4419 17.9927 13.2209C17.8277 13.6859 18.0607 14.0959 18.5527 14.0959ZM11.1697 6.9449C12.8657 6.9449 14.2327 5.5649 14.2327 3.8559C14.2327 2.1739 12.8657 0.7929 11.1697 0.7929C9.4607 0.7929 8.0937 2.1739 8.0937 3.8559C8.0937 5.5649 9.4607 6.9449 11.1697 6.9449ZM1.4497 33.5099C2.0647 33.8379 2.9937 33.7149 3.4177 32.9359L6.9047 26.6599L8.9277 22.1349C8.9827 22.0119 9.1187 21.9709 9.2427 22.0529L14.6427 25.9899V32.2249C14.6427 33.0309 15.2987 33.6739 16.1057 33.6739C16.9117 33.6739 17.5547 33.0309 17.5547 32.2249V25.3339C17.5547 24.9239 17.4317 24.4999 17.1177 24.1859L11.3747 18.7579L11.8807 14.6019C11.8947 14.4509 12.1137 14.4379 12.1677 14.5739L13.3577 17.4319C13.5897 17.9919 14.1097 18.3339 14.7107 18.3339H20.6307C21.4377 18.3339 22.0797 17.6919 22.0797 16.8849C22.0797 16.0779 21.4377 15.4219 20.6307 15.4219H15.6547L13.6717 10.7739C13.1527 9.5429 12.3597 8.8459 10.5817 8.3539L9.7757 8.1349C7.8477 7.5879 6.5217 7.5059 4.9497 8.1899L2.9117 9.0649V3.9789C2.9117 3.1859 2.2427 2.5289 1.4497 2.5289C0.6427 2.5289 -0.0003 3.1859 -0.0003 3.9789V11.4429C-0.0003 12.4959 1.0797 13.0429 2.0237 12.6329L5.9067 10.9379C6.0707 10.8689 6.2347 10.9789 6.1937 11.1559L4.2247 25.4979L0.8747 31.5409C0.4927 32.2249 0.7247 33.1539 1.4497 33.5099Z"
            fill={color}
          />
        </svg>
      )
    case "regular":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 22.60913266141967 33.140625"
          className={className}
        >
          <path
            d="              M18.2927 13.8774H22.0667C22.5177 13.8774 22.7087 13.4944 22.5587 13.0844C22.2987 12.3044 21.6977 11.7034 20.9457 11.4574V0.7524C20.9457 0.3284 20.6037 0.0004 20.1797 0.0004C19.7557 0.0004 19.4277 0.3284 19.4277 0.7524V11.4574C18.6617 11.7034 18.0607 12.3044 17.8007 13.0844C17.6507 13.4944 17.8417 13.8774 18.2927 13.8774ZM10.9377 6.7814C12.5777 6.7814 13.9177 5.4554 13.9177 3.7734C13.9177 2.1464 12.5777 0.8064 10.9377 0.8064C9.2697 0.8064 7.9437 2.1464 7.9437 3.7734C7.9437 5.4554 9.2697 6.7814 10.9377 6.7814ZM1.3947 32.9764C1.9957 33.2914 2.8707 33.1684 3.2817 32.4294L6.7267 26.2224L8.7637 21.6424C8.8047 21.5464 8.9417 21.5054 9.0237 21.5874L14.4927 25.5524V31.7464C14.4927 32.5254 15.1077 33.1404 15.8727 33.1404C16.6527 33.1404 17.2537 32.5254 17.2537 31.7464V24.9374C17.2537 24.5414 17.1447 24.1304 16.8297 23.8434L11.1287 18.4574L11.6617 14.1234C11.6757 13.9594 11.8947 13.9454 11.9497 14.0824L13.2207 17.1034C13.4397 17.6364 13.9317 17.9514 14.4927 17.9514H20.3577C21.1227 17.9514 21.7387 17.3354 21.7387 16.5704C21.7387 15.8044 21.1227 15.1894 20.3577 15.1894H15.3947L13.4257 10.5544C12.9067 9.3514 12.1407 8.6684 10.3907 8.1894L9.5977 7.9704C7.6977 7.4374 6.3987 7.3554 4.8677 8.0254L2.7617 8.9274V3.8004C2.7617 3.0484 2.1327 2.4334 1.3807 2.4334C0.6157 2.4334 -0.0003 3.0484 -0.0003 3.8004V11.1974C-0.0003 12.1814 1.0257 12.7144 1.9277 12.3184L5.8377 10.6094C6.0157 10.5414 6.1797 10.6504 6.1527 10.8414L4.1837 25.1154L0.8477 31.1034C0.4927 31.7464 0.7247 32.6344 1.3947 32.9764Z"
            fill={color}
          />
        </svg>
      )
    case "semibold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 23.237630741412232 34.1027231806348"
          className={className}
        >
          <path
            d="              M18.7577 14.2736H22.5587C23.1057 14.2736 23.3517 13.8226 23.1877 13.3166C22.9137 12.5646 22.3397 11.9626 21.6157 11.6756V0.9436C21.6157 0.4236 21.1917 -0.0004 20.6587 -0.0004C20.1387 -0.0004 19.7147 0.4236 19.7147 0.9436V11.6756C18.9767 11.9496 18.4027 12.5646 18.1427 13.3296C17.9647 13.8356 18.2247 14.2736 18.7577 14.2736ZM11.3477 7.0686C13.0707 7.0686 14.4787 5.6736 14.4787 3.9236C14.4787 2.2016 13.0707 0.8066 11.3477 0.8066C9.6117 0.8066 8.2027 2.2016 8.2027 3.9236C8.2027 5.6736 9.6117 7.0686 11.3477 7.0686ZM1.4767 33.9336C2.1327 34.2616 3.0767 34.1386 3.5277 33.3316L7.0407 27.0016L9.0507 22.5176C9.1057 22.3806 9.2697 22.3396 9.3927 22.4356L14.7657 26.3316V32.5936C14.7657 33.4276 15.4357 34.0976 16.2837 34.0976C17.1177 34.0976 17.7867 33.4276 17.7867 32.5936V25.6486C17.7867 25.2386 17.6637 24.7736 17.3227 24.4586L11.5527 19.0036L12.0447 14.9846C12.0587 14.8336 12.2777 14.8206 12.3187 14.9566L13.4667 17.7046C13.7127 18.2796 14.2597 18.6346 14.8617 18.6346H20.8357C21.6697 18.6346 22.3397 17.9646 22.3397 17.1306C22.3397 16.2836 21.6697 15.6136 20.8357 15.6136H15.8597L13.8637 10.9516C13.3297 9.7066 12.5237 8.9956 10.7187 8.4906L9.8987 8.2576C7.9567 7.7106 6.6177 7.6426 5.0177 8.3266L3.0217 9.1736V4.1156C3.0217 3.2946 2.3377 2.6246 1.5037 2.6246C0.6697 2.6246 -0.0003 3.2946 -0.0003 4.1156V11.6486C-0.0003 12.7426 1.1207 13.3166 2.1057 12.8786L5.9607 11.2106C6.1247 11.1426 6.2617 11.2386 6.2347 11.4156L4.2657 25.7986L0.8747 31.8826C0.4787 32.5936 0.7247 33.5506 1.4767 33.9336Z"
            fill={color}
          />
        </svg>
      )
    case "thin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 21.21576960142818 30.601721919811958"
          className={className}
        >
          <path
            d="              M17.0347 12.6873H20.7817C21.2047 12.6873 21.2737 12.3323 21.1777 12.0453C20.8637 11.1293 20.1797 10.5133 19.3457 10.3493V0.4373C19.3457 0.1913 19.1547 0.0003 18.9087 0.0003C18.6617 0.0003 18.4707 0.1913 18.4707 0.4373V10.3493C17.6367 10.5133 16.9527 11.1293 16.6387 12.0453C16.5427 12.3323 16.5977 12.6873 17.0347 12.6873ZM10.2537 5.6873C11.7847 5.6873 13.0427 4.4293 13.0427 2.8713C13.0427 1.3403 11.7847 0.0823 10.2537 0.0823C8.7087 0.0823 7.4517 1.3403 7.4517 2.8713C7.4517 4.4293 8.7087 5.6873 10.2537 5.6873ZM1.3127 30.4473C1.8727 30.7483 2.6937 30.6253 3.0767 29.9413L6.3027 24.1173L8.2437 19.7833C8.2577 19.7153 8.3397 19.7013 8.4087 19.7423L13.5767 23.5023V29.3123C13.5767 30.0233 14.1637 30.5973 14.8747 30.5973C15.5997 30.5973 16.1737 30.0233 16.1737 29.3123V22.9273C16.1737 22.5583 16.0647 22.1623 15.7777 21.9023L10.4317 16.8433L10.9237 12.7833C10.9517 12.6333 11.1427 12.6193 11.1977 12.7423L12.3867 15.5723C12.5917 16.0643 13.0567 16.3653 13.5767 16.3653H19.0727C19.7837 16.3653 20.3707 15.8043 20.3707 15.0933C20.3707 14.3553 19.7837 13.7953 19.0727 13.7953H14.4237L12.5777 9.4333C12.0997 8.3123 11.3747 7.6973 9.7347 7.2323L8.9957 7.0273C7.2187 6.5083 6.0017 6.4673 4.5667 7.0683L2.5977 7.9163V3.1173C2.5977 2.4203 2.0097 1.8323 1.2987 1.8323C0.5877 1.8323 -0.0003 2.4203 -0.0003 3.1173V10.0493C-0.0003 10.9653 0.9567 11.4703 1.8187 11.0883L5.4687 9.4883C5.6327 9.4203 5.7837 9.5293 5.7557 9.7073L3.9237 23.0923L0.7927 28.6833C0.4647 29.3123 0.6697 30.1333 1.3127 30.4473Z"
            fill={color}
          />
        </svg>
      )
    case "ultralight":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20.80446858028876 29.99609375"
          className={className}
        >
          <path
            d="              M10.0487 5.4965C11.5527 5.4965 12.7837 4.2515 12.7837 2.7345C12.7837 1.2445 11.5527 -0.0005 10.0487 -0.0005C8.5317 -0.0005 7.3007 1.2445 7.3007 2.7345C7.3007 4.2515 8.5317 5.4965 10.0487 5.4965ZM16.6657 12.4685H20.3987C20.8227 12.4685 20.8497 12.1135 20.7677 11.8535C20.4397 10.9235 19.7427 10.2945 18.8807 10.1585V0.4645C18.8807 0.2735 18.7307 0.1235 18.5387 0.1235C18.3477 0.1235 18.1977 0.2735 18.1977 0.4645V10.1585C17.3357 10.2945 16.6247 10.9235 16.3107 11.8535C16.2147 12.1135 16.2287 12.4685 16.6657 12.4685ZM1.2847 29.8325C1.8317 30.1325 2.6527 30.0095 3.0077 29.3395L6.1797 23.6385L8.0797 19.3595C8.1077 19.3045 8.1757 19.2915 8.2167 19.3325L13.3167 23.0235V28.7245C13.3167 29.4215 13.8907 29.9965 14.5877 29.9965C15.2987 29.9965 15.8597 29.4215 15.8597 28.7245V22.4625C15.8597 22.0935 15.7497 21.7105 15.4767 21.4515L10.2267 16.5015L10.7187 12.5095C10.7327 12.3735 10.9237 12.3595 10.9787 12.4825L12.1407 15.2575C12.3597 15.7365 12.8107 16.0375 13.3167 16.0375H18.6897C19.3867 16.0375 19.9607 15.4765 19.9607 14.7795C19.9607 14.0685 19.3867 13.5075 18.6897 13.5075H14.1507L12.3317 9.2425C11.8677 8.1485 11.1567 7.5335 9.5427 7.0825L8.8187 6.8765C7.0687 6.3715 5.8927 6.3305 4.4847 6.9175L2.5427 7.7385V3.0355C2.5427 2.3655 1.9687 1.7775 1.2717 1.7775C0.5747 1.7775 -0.0003 2.3655 -0.0003 3.0355V9.8305C-0.0003 10.7465 0.9437 11.2245 1.7777 10.8555L5.3597 9.2965C5.5237 9.2285 5.6597 9.3245 5.6467 9.5015L3.8557 22.6265L0.7797 28.1095C0.4517 28.7245 0.6567 29.5175 1.2847 29.8325Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}