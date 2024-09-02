import { IconProps } from "../../types"

export default function ForwardEndAltIconIcon({
  weight = "regular",
  color = "#000000",
  className = "",
}: IconProps) {
  switch (weight) {
    case "black":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 49.943359375 25.005859375"
          className={className}
        >
          <path
            d="              M3.1997 24.6092C3.9927 24.6092 4.7307 24.4312 5.4687 24.0082L19.7837 15.6542C20.8637 15.0392 21.7247 14.2602 21.9707 13.1382V21.0822C21.9707 23.3102 23.4477 24.6092 25.1837 24.6092C25.9627 24.6092 26.7017 24.4312 27.4527 24.0082L41.7677 15.6542C42.8337 15.0392 43.7087 14.2602 43.9547 13.1382V22.1072C43.9547 23.7752 45.1997 25.0062 46.9497 25.0062C48.6857 25.0062 49.9437 23.7752 49.9437 22.1072V2.8982C49.9437 1.2302 48.6857 0.0002 46.9497 0.0002C45.1997 0.0002 43.9547 1.2302 43.9547 2.8982V11.8122C43.7087 10.7322 42.8747 10.0082 41.7677 9.3652L27.4527 1.0252C26.6877 0.5882 25.9497 0.4102 25.1427 0.4102C23.4197 0.4102 21.9707 1.6952 21.9707 3.9372V11.8122C21.7387 10.7322 20.9047 10.0082 19.7837 9.3652L5.4687 1.0252C4.7167 0.5882 3.9647 0.4102 3.1717 0.4102C1.4357 0.4102 -0.0003 1.6952 -0.0003 3.9372V21.0822C-0.0003 23.3102 1.4767 24.6092 3.1997 24.6092ZM4.8677 18.8812C4.7987 18.8812 4.7717 18.8402 4.7717 18.7852V6.2342C4.7717 6.1792 4.7987 6.1382 4.8807 6.1382C4.9217 6.1382 4.9497 6.1382 5.0037 6.1792L15.7907 12.3872C15.8457 12.4142 15.8457 12.4282 15.8457 12.4962C15.8457 12.5512 15.8187 12.5922 15.7907 12.6192L5.0037 18.8402C4.9767 18.8672 4.9217 18.8812 4.8677 18.8812ZM26.8377 18.8812C26.7697 18.8812 26.7557 18.8402 26.7557 18.7852V6.2342C26.7557 6.1792 26.7697 6.1382 26.8517 6.1382C26.8927 6.1382 26.9337 6.1382 26.9887 6.1792L37.7757 12.3872C37.8167 12.4142 37.8167 12.4282 37.8167 12.4962C37.8167 12.5512 37.8027 12.5922 37.7757 12.6192L26.9887 18.8402C26.9477 18.8672 26.8927 18.8812 26.8377 18.8812Z"
            fill={color}
          />
        </svg>
      )
    case "bold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 44.92578125 23.7890625"
          className={className}
        >
          <path
            d="              M2.5837 23.311C3.2537 23.311 3.8557 23.133 4.5117 22.764L18.6347 14.492C19.5507 13.945 20.1797 13.303 20.3847 12.469V20.385C20.3847 22.258 21.5607 23.311 22.9687 23.311C23.6387 23.311 24.2407 23.133 24.8827 22.764L39.0197 14.492C39.9217 13.945 40.5647 13.303 40.7697 12.469V21.766C40.7697 22.928 41.6587 23.789 42.8477 23.789C44.0367 23.789 44.9257 22.928 44.9257 21.766V2.01C44.9257 0.861 44.0367 0 42.8477 0C41.6587 0 40.7697 0.861 40.7697 2.01V11.279C40.5647 10.459 39.9497 9.857 39.0197 9.311L24.8827 1.025C24.2267 0.656 23.6247 0.479 22.9547 0.479C21.5467 0.479 20.3847 1.518 20.3847 3.404V11.279C20.1797 10.459 19.5647 9.857 18.6347 9.311L4.5117 1.025C3.8417 0.656 3.2537 0.479 2.5707 0.479C1.1617 0.479 -0.0003 1.518 -0.0003 3.404V20.385C-0.0003 22.258 1.1897 23.311 2.5837 23.311ZM3.7187 19.182C3.5817 19.182 3.4867 19.1 3.4867 18.936V4.854C3.4867 4.689 3.5817 4.607 3.7187 4.607C3.7867 4.607 3.8557 4.621 3.9517 4.676L15.8457 11.648C15.9687 11.703 16.0237 11.758 16.0237 11.881C16.0237 12.004 15.9547 12.072 15.8457 12.141L3.9517 19.113C3.8687 19.154 3.7867 19.182 3.7187 19.182ZM24.0897 19.182C23.9667 19.182 23.8707 19.1 23.8707 18.936V4.854C23.8707 4.689 23.9667 4.607 24.1037 4.607C24.1717 4.607 24.2407 4.621 24.3357 4.676L36.2307 11.648C36.3397 11.703 36.3947 11.758 36.3947 11.881C36.3947 12.004 36.3397 12.072 36.2307 12.141L24.3357 19.113C24.2537 19.154 24.1717 19.182 24.0897 19.182Z"
            fill={color}
          />
        </svg>
      )
    case "heavy":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 47.578125 24.431640625"
          className={className}
        >
          <path
            d="              M2.9117 23.9941C3.6367 23.9941 4.3207 23.8301 5.0177 23.4201L19.2367 15.1071C20.2477 14.5191 20.9997 13.8091 21.2187 12.8241V20.7541C21.2187 22.8181 22.5587 23.9941 24.1307 23.9941C24.8687 23.9941 25.5387 23.8301 26.2367 23.4201L40.4687 15.1071C41.4667 14.5191 42.2187 13.8091 42.4517 12.8241V21.9571C42.4517 23.3791 43.5317 24.4321 45.0077 24.4321C46.4977 24.4321 47.5777 23.3791 47.5777 21.9571V2.4881C47.5777 1.0661 46.4977 0.0001 45.0077 0.0001C43.5317 0.0001 42.4517 1.0661 42.4517 2.4881V11.5661C42.2327 10.6091 41.4937 9.9391 40.4687 9.3381L26.2367 1.0251C25.5257 0.6291 24.8557 0.4511 24.1037 0.4511C22.5317 0.4511 21.2187 1.6131 21.2187 3.6911V11.5661C20.9997 10.6091 20.2757 9.9391 19.2367 9.3381L5.0177 1.0251C4.3067 0.6291 3.6367 0.4511 2.8847 0.4511C1.3127 0.4511 -0.0003 1.6131 -0.0003 3.6911V20.7541C-0.0003 22.8181 1.3397 23.9941 2.9117 23.9941ZM4.3207 19.0311C4.2247 19.0311 4.1697 18.9761 4.1697 18.8531V5.5921C4.1697 5.4821 4.2247 5.4141 4.3337 5.4141C4.3887 5.4141 4.4437 5.4281 4.5117 5.4691L15.8187 12.0451C15.9007 12.0861 15.9277 12.1271 15.9277 12.2091C15.9277 12.3051 15.8867 12.3591 15.8187 12.4001L4.5117 18.9761C4.4567 19.0041 4.3887 19.0311 4.3207 19.0311ZM25.5387 19.0311C25.4437 19.0311 25.3887 18.9761 25.3887 18.8531V5.5921C25.3887 5.4821 25.4437 5.4141 25.5527 5.4141C25.6077 5.4141 25.6617 5.4281 25.7307 5.4691L37.0367 12.0451C37.1187 12.0861 37.1467 12.1271 37.1467 12.2091C37.1467 12.3051 37.1057 12.3591 37.0367 12.4001L25.7307 18.9761C25.6757 19.0041 25.6077 19.0311 25.5387 19.0311Z"
            fill={color}
          />
        </svg>
      )
    case "light":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 38.349609375 21.984375"
          className={className}
        >
          <path
            d="              M1.7497 21.4376C2.2427 21.4376 2.6937 21.2596 3.1587 20.9866L17.2127 12.7146C17.7867 12.3726 18.1427 11.9626 18.2797 11.4846V19.3456C18.2797 20.7406 19.0997 21.4376 20.0427 21.4376C20.5347 21.4376 20.9727 21.2596 21.4377 20.9866L35.4927 12.7146C36.0797 12.3726 36.4357 11.9626 36.5727 11.4846V21.1226C36.5727 21.6016 36.9687 21.9846 37.4607 21.9846C37.9527 21.9846 38.3497 21.6016 38.3497 21.1226V0.8746C38.3497 0.3826 37.9527 -0.0004 37.4607 -0.0004C36.9687 -0.0004 36.5727 0.3826 36.5727 0.8746V10.4866C36.4357 10.0216 36.0797 9.6116 35.4927 9.2696L21.4377 0.9976C20.9727 0.7246 20.5347 0.5336 20.0427 0.5336C19.0997 0.5336 18.2797 1.2446 18.2797 2.6386V10.4866C18.1427 10.0216 17.8007 9.6116 17.2127 9.2696L3.1587 0.9976C2.6797 0.7246 2.2427 0.5336 1.7497 0.5336C0.8207 0.5336 -0.0003 1.2446 -0.0003 2.6386V19.3456C-0.0003 20.7406 0.8207 21.4376 1.7497 21.4376ZM2.1597 19.5366C1.9277 19.5366 1.6677 19.3726 1.6677 18.9626V3.0076C1.6677 2.5976 1.9277 2.4476 2.1597 2.4476C2.2697 2.4476 2.4067 2.4886 2.5977 2.5976L15.9957 10.5136C16.2427 10.6636 16.3517 10.7736 16.3517 10.9926C16.3517 11.1976 16.2287 11.3336 15.9957 11.4566L2.5977 19.3866C2.4197 19.4956 2.2697 19.5366 2.1597 19.5366ZM20.4397 19.5366C20.2207 19.5366 19.9607 19.3726 19.9607 18.9626V3.0076C19.9607 2.5976 20.2207 2.4476 20.4397 2.4476C20.5627 2.4476 20.6857 2.4886 20.8907 2.5976L34.2757 10.5136C34.5217 10.6636 34.6447 10.7736 34.6447 10.9926C34.6447 11.1976 34.5077 11.3336 34.2757 11.4566L20.8907 19.3866C20.6997 19.4956 20.5627 19.5366 20.4397 19.5366Z"
            fill={color}
          />
        </svg>
      )
    case "medium":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 41.712890625 23.0234375"
          className={className}
        >
          <path
            d="              M2.1877 22.4901C2.7887 22.4901 3.2947 22.3121 3.8827 21.9711L17.8967 13.7401C18.7027 13.2751 19.1817 12.7151 19.3597 12.0581V19.9331C19.3597 21.5881 20.3577 22.4901 21.5467 22.4901C22.1487 22.4901 22.6547 22.3121 23.2557 21.9711L37.2557 13.7401C38.0627 13.2751 38.5547 12.7151 38.7187 12.0581V21.5601C38.7187 22.3941 39.3747 23.0231 40.2227 23.0231C41.0567 23.0231 41.7127 22.3941 41.7127 21.5601V1.4631C41.7127 0.6291 41.0567 0.0001 40.2227 0.0001C39.3747 0.0001 38.7187 0.6291 38.7187 1.4631V10.9511C38.5547 10.2951 38.0627 9.7621 37.2557 9.2831L23.2557 1.0531C22.6547 0.7111 22.1487 0.5331 21.5467 0.5331C20.3577 0.5331 19.3597 1.4221 19.3597 3.0901V10.9511C19.1957 10.2951 18.7027 9.7621 17.8967 9.2831L3.8827 1.0531C3.2947 0.7111 2.7887 0.5331 2.1877 0.5331C0.9977 0.5331 -0.0003 1.4221 -0.0003 3.0901V19.9331C-0.0003 21.5881 0.9977 22.4901 2.1877 22.4901ZM2.9807 19.3871C2.8027 19.3871 2.6527 19.2771 2.6527 19.0451V3.9781C2.6527 3.7461 2.8027 3.6371 2.9807 3.6371C3.0627 3.6371 3.1587 3.6641 3.2817 3.7321L15.8727 11.1701C16.0367 11.2651 16.1327 11.3481 16.1327 11.5121C16.1327 11.6761 16.0367 11.7581 15.8727 11.8401L3.2817 19.2911C3.1587 19.3591 3.0627 19.3871 2.9807 19.3871ZM22.3397 19.3871C22.1617 19.3871 22.0257 19.2771 22.0257 19.0451V3.9781C22.0257 3.7461 22.1617 3.6371 22.3397 3.6371C22.4217 3.6371 22.5177 3.6641 22.6407 3.7321L35.2327 11.1701C35.4097 11.2651 35.4927 11.3481 35.4927 11.5121C35.4927 11.6761 35.3967 11.7581 35.2327 11.8401L22.6407 19.2911C22.5177 19.3591 22.4217 19.3871 22.3397 19.3871Z"
            fill={color}
          />
        </svg>
      )
    case "regular":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 39.908203125 22.5859375"
          className={className}
        >
          <path
            d="              M1.9687 22.0394C2.5297 22.0394 2.9807 21.8614 3.5407 21.5334L17.4727 13.3304C18.2107 12.8924 18.6347 12.3864 18.7847 11.8264V19.6874C18.7847 21.2184 19.6877 22.0394 20.7537 22.0394C21.3147 22.0394 21.7797 21.8614 22.3267 21.5334L36.2577 13.3304C36.9957 12.8924 37.4197 12.3864 37.5707 11.8264V21.4514C37.5707 22.0934 38.1037 22.5864 38.7457 22.5864C39.3887 22.5864 39.9087 22.0934 39.9087 21.4514V1.1484C39.9087 0.5054 39.3887 0.0004 38.7457 0.0004C38.1037 0.0004 37.5707 0.5054 37.5707 1.1484V10.7594C37.4197 10.1994 37.0097 9.6934 36.2577 9.2554L22.3267 1.0524C21.7657 0.7244 21.3147 0.5464 20.7537 0.5464C19.6877 0.5464 18.7847 1.3674 18.7847 2.8984V10.7594C18.6347 10.1994 18.2107 9.6934 17.4727 9.2554L3.5407 1.0524C2.9807 0.7244 2.5297 0.5464 1.9687 0.5464C0.8887 0.5464 -0.0003 1.3674 -0.0003 2.8984V19.6874C-0.0003 21.2184 0.8887 22.0394 1.9687 22.0394ZM2.5707 19.5094C2.3657 19.5094 2.1877 19.3734 2.1877 19.0994V3.4864C2.1877 3.2124 2.3657 3.0764 2.5707 3.0764C2.6527 3.0764 2.7617 3.1174 2.8987 3.1994L15.9007 10.9104C16.0917 11.0194 16.1877 11.1014 16.1877 11.2934C16.1877 11.4704 16.0777 11.5664 15.9007 11.6754L2.8987 19.3864C2.7617 19.4684 2.6527 19.5094 2.5707 19.5094ZM21.3557 19.5094C21.1507 19.5094 20.9867 19.3734 20.9867 19.0994V3.4864C20.9867 3.2124 21.1507 3.0764 21.3557 3.0764C21.4377 3.0764 21.5467 3.1174 21.6837 3.1994L34.6857 10.9104C34.8767 11.0194 34.9727 11.1014 34.9727 11.2934C34.9727 11.4704 34.8767 11.5664 34.6857 11.6754L21.6837 19.3864C21.5467 19.4684 21.4377 19.5094 21.3557 19.5094Z"
            fill={color}
          />
        </svg>
      )
    case "semibold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 43.09375 23.3515625"
          className={className}
        >
          <path
            d="              M2.3657 22.8462C2.9937 22.8462 3.5407 22.6682 4.1567 22.3122L18.2107 14.0682C19.0587 13.5622 19.6187 12.9742 19.7967 12.2362V20.1252C19.7967 21.8752 20.8767 22.8462 22.1617 22.8462C22.7907 22.8462 23.3377 22.6682 23.9527 22.3122L38.0077 14.0682C38.8687 13.5622 39.4157 12.9742 39.6077 12.2362V21.6562C39.6077 22.6272 40.3597 23.3512 41.3577 23.3512C42.3417 23.3512 43.0937 22.6272 43.0937 21.6562V1.6952C43.0937 0.7242 42.3417 0.0002 41.3577 0.0002C40.3597 0.0002 39.6077 0.7242 39.6077 1.6952V11.0882C39.4157 10.3632 38.8827 9.8032 38.0077 9.2832L23.9527 1.0392C23.3377 0.6832 22.7907 0.5062 22.1487 0.5062C20.8637 0.5062 19.7967 1.4632 19.7967 3.2262V11.0882C19.6187 10.3632 19.0727 9.8032 18.2107 9.2832L4.1567 1.0392C3.5277 0.6832 2.9807 0.5062 2.3517 0.5062C1.0667 0.5062 -0.0003 1.4632 -0.0003 3.2262V20.1252C-0.0003 21.8752 1.0797 22.8462 2.3657 22.8462ZM3.2947 19.3042C3.1447 19.3042 3.0077 19.2092 3.0077 18.9902V4.3612C3.0077 4.1562 3.1447 4.0472 3.2947 4.0472C3.3767 4.0472 3.4587 4.0742 3.5687 4.1422L15.8597 11.3752C16.0097 11.4572 16.0777 11.5252 16.0777 11.6762C16.0777 11.8122 15.9957 11.8942 15.8597 11.9762L3.5687 19.2092C3.4727 19.2772 3.3767 19.3042 3.2947 19.3042ZM23.0917 19.3042C22.9417 19.3042 22.8187 19.2092 22.8187 18.9902V4.3612C22.8187 4.1562 22.9417 4.0472 23.1057 4.0472C23.1737 4.0472 23.2557 4.0742 23.3657 4.1422L35.6697 11.3752C35.8067 11.4572 35.8887 11.5252 35.8887 11.6762C35.8887 11.8122 35.8067 11.8942 35.6697 11.9762L23.3657 19.2092C23.2697 19.2772 23.1737 19.3042 23.0917 19.3042Z"
            fill={color}
          />
        </svg>
      )
    case "thin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 36.28515625 21.205078125"
          className={className}
        >
          <path
            d="              M1.4627 20.6581C1.8727 20.6581 2.2967 20.4671 2.6527 20.2621L16.8437 11.9081C17.2407 11.6761 17.4997 11.3891 17.6227 11.0331V18.8941C17.6227 20.0981 18.3337 20.6581 19.0857 20.6581C19.4957 20.6581 19.9197 20.4671 20.2757 20.2621L34.4667 11.9081C34.8637 11.6761 35.1227 11.3891 35.2457 11.0331V20.6851C35.2457 20.9731 35.4787 21.2051 35.7657 21.2051C36.0527 21.2051 36.2847 20.9731 36.2847 20.6851V0.5061C36.2847 0.2191 36.0527 0.0001 35.7657 0.0001C35.4787 0.0001 35.2457 0.2191 35.2457 0.5061V10.1311C35.1227 9.7751 34.8637 9.5021 34.4667 9.2691L20.2757 0.9161C19.9067 0.7111 19.4957 0.5191 19.0857 0.5191C18.3337 0.5191 17.6227 1.0801 17.6227 2.2831V10.1311C17.4997 9.7751 17.2407 9.5021 16.8437 9.2691L2.6527 0.9161C2.2837 0.7111 1.8727 0.5191 1.4627 0.5191C0.7107 0.5191 -0.0003 1.0801 -0.0003 2.2831V18.8941C-0.0003 20.0981 0.7107 20.6581 1.4627 20.6581ZM1.6137 19.5781C1.3537 19.5781 0.9847 19.3731 0.9847 18.7991V2.3791C0.9847 1.8051 1.3537 1.6131 1.6137 1.6131C1.7777 1.6131 1.9277 1.6401 2.2147 1.8051L16.1327 10.0081C16.4337 10.1851 16.5837 10.3221 16.5837 10.5821C16.5837 10.8421 16.4197 11.0191 16.1327 11.1701L2.2147 19.3871C1.9417 19.5371 1.7777 19.5781 1.6137 19.5781ZM19.2367 19.5781C18.9767 19.5781 18.6077 19.3731 18.6077 18.7991V2.3791C18.6077 1.8051 18.9767 1.6131 19.2367 1.6131C19.4007 1.6131 19.5507 1.6401 19.8377 1.8051L33.7557 10.0081C34.0567 10.1851 34.2067 10.3221 34.2067 10.5821C34.2067 10.8421 34.0427 11.0191 33.7557 11.1701L19.8377 19.3871C19.5647 19.5371 19.4007 19.5781 19.2367 19.5781Z"
            fill={color}
          />
        </svg>
      )
    case "ultralight":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 35.232421875 20.80859375"
          className={className}
        >
          <path
            d="              M1.3127 20.2617C1.6817 20.2617 2.0917 20.0707 2.3927 19.9067L16.6657 11.5117C16.9527 11.3337 17.1717 11.1157 17.2817 10.8147V18.6757C17.2817 19.7827 17.9377 20.2617 18.5937 20.2617C18.9627 20.2617 19.3727 20.0707 19.6737 19.9067L33.9477 11.5117C34.2347 11.3337 34.4667 11.1157 34.5627 10.8147V20.4807C34.5627 20.6577 34.7127 20.8087 34.9047 20.8087C35.0817 20.8087 35.2327 20.6577 35.2327 20.4807V0.3417C35.2327 0.1507 35.0817 -0.0003 34.9047 -0.0003C34.7127 -0.0003 34.5627 0.1507 34.5627 0.3417V9.9667C34.4667 9.6797 34.2477 9.4607 33.9477 9.2827L19.6737 0.8887C19.3597 0.7247 18.9627 0.5327 18.5937 0.5327C17.9377 0.5327 17.2817 1.0117 17.2817 2.1187V9.9667C17.1857 9.6797 16.9667 9.4607 16.6657 9.2827L2.3927 0.8887C2.0777 0.7247 1.6817 0.5327 1.3127 0.5327C0.6567 0.5327 -0.0003 1.0117 -0.0003 2.1187V18.6757C-0.0003 19.7827 0.6567 20.2617 1.3127 20.2617ZM1.3397 19.6057C1.0527 19.6057 0.6287 19.3867 0.6287 18.7167V2.0777C0.6287 1.4077 1.0527 1.1897 1.3397 1.1897C1.5177 1.1897 1.6957 1.2307 2.0097 1.4077L16.2017 9.7617C16.5297 9.9527 16.6937 10.1037 16.6937 10.3907C16.6937 10.6637 16.5157 10.8687 16.2017 11.0327L2.0097 19.3867C1.7087 19.5647 1.5177 19.6057 1.3397 19.6057ZM18.6207 19.6057C18.3477 19.6057 17.9237 19.3867 17.9237 18.7167V2.0777C17.9237 1.4077 18.3477 1.1897 18.6207 1.1897C18.7987 1.1897 18.9767 1.2307 19.2907 1.4077L33.4827 9.7617C33.8247 9.9527 33.9747 10.1037 33.9747 10.3907C33.9747 10.6637 33.7967 10.8687 33.4827 11.0327L19.2907 19.3867C18.9907 19.5647 18.7987 19.6057 18.6207 19.6057Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}
