import { IconProps } from "../../types"

export default function GiftIconIcon({
  weight = "regular",
  color = "#000000",
  className = "",
}: IconProps) {
  switch (weight) {
    case "black":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 28.642578125 30.720703125"
          className={className}
        >
          <path
            d="              M5.7837 30.7205H22.8597C25.4977 30.7205 27.0297 29.1895 27.0297 26.6055V19.3185C28.1507 18.6895 28.6427 17.4585 28.6427 15.5725V12.6605C28.6427 9.9805 27.1247 8.3805 24.5407 8.3805H23.8577C24.6097 7.5465 25.0747 6.4665 25.0747 5.2365C25.0747 2.1875 22.5997 0.0005 19.5777 0.0005C17.1447 0.0005 14.9157 1.5175 14.3147 4.2385C13.7407 1.5175 11.4977 0.0005 9.0507 0.0005C6.0427 0.0005 3.5687 2.1875 3.5687 5.2365C3.5687 6.4665 4.0337 7.5465 4.7847 8.3805H4.1017C1.5317 8.3805 -0.0003 9.9805 -0.0003 12.6605V15.5725C-0.0003 17.4585 0.4927 18.6895 1.6137 19.3185V26.6055C1.6137 29.1895 3.1447 30.7205 5.7837 30.7205ZM12.2637 8.3805H10.5407C8.7087 8.3805 7.6837 7.4515 7.6837 6.0565C7.6837 4.8265 8.3807 3.8965 9.7477 3.8965C11.1157 3.8965 12.2637 5.2365 12.2637 6.7815ZM16.3787 8.3805V6.7815C16.3787 5.2365 17.5407 3.8965 18.8947 3.8965C20.2617 3.8965 20.9587 4.8265 20.9587 6.0565C20.9587 7.4515 19.9337 8.3805 18.1017 8.3805ZM12.2227 15.8045H5.4957C4.9907 15.8045 4.7167 15.5315 4.7167 15.0255V13.2205C4.7167 12.7145 4.9907 12.4275 5.4957 12.4275H12.2227ZM16.4337 15.8045V12.4275H23.1467C23.6527 12.4275 23.9257 12.7145 23.9257 13.2205V15.1485C23.9257 15.6545 23.6527 15.8045 23.1467 15.8045ZM12.2087 26.5235H7.6017C6.7677 26.5235 6.3027 26.0175 6.3027 25.2655V19.8375H12.2087ZM16.4337 26.5235V19.8375H22.3397V25.2655C22.3397 26.0175 21.8477 26.5235 21.0277 26.5235Z"
            fill={color}
          />
        </svg>
      )
    case "bold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 27.466796875 29.6953125"
          className={className}
        >
          <path
            d="              M5.8657 29.695H21.5877C24.1997 29.695 25.6757 28.246 25.6757 25.662V17.828H25.7307C26.8927 17.377 27.4667 16.283 27.4667 14.643V11.389C27.4667 9.215 26.2497 7.889 24.1177 7.889H22.3947C23.1327 7.109 23.5837 6.084 23.5837 4.895C23.5837 2.051 21.2867 0 18.4567 0C16.2837 0 14.3687 1.285 13.7267 3.568C13.0977 1.285 11.1837 0 8.9957 0C6.1657 0 3.8827 2.051 3.8827 4.895C3.8827 6.084 4.3337 7.109 5.0727 7.889H3.3497C1.2577 7.889 -0.0003 9.215 -0.0003 11.389V14.643C-0.0003 16.283 0.5747 17.377 1.7367 17.828H1.7907V25.662C1.7907 28.246 3.2677 29.695 5.8657 29.695ZM12.1407 7.889H10.2127C8.2167 7.889 7.0817 6.822 7.0817 5.373C7.0817 3.992 7.9847 3.09 9.4067 3.09C10.9097 3.09 12.1407 4.389 12.1407 6.166ZM15.3127 7.889V6.166C15.3127 4.389 16.5567 3.09 18.0467 3.09C19.4827 3.09 20.3847 3.992 20.3847 5.373C20.3847 6.822 19.2497 7.889 17.2537 7.889ZM12.0727 15.08H4.3207C3.7327 15.08 3.4587 14.807 3.4587 14.205V11.812C3.4587 11.225 3.7327 10.937 4.3207 10.937H12.0727ZM15.3947 15.08V10.937H23.1467C23.7477 10.937 24.0077 11.225 24.0077 11.812V14.273C24.0077 14.875 23.7477 15.08 23.1467 15.08ZM12.0727 26.578H6.7677C5.7837 26.578 5.2367 25.99 5.2367 25.061V18.143H12.0727ZM15.3947 26.578V18.143H22.2307V25.061C22.2307 25.99 21.6697 26.578 20.6857 26.578Z"
            fill={color}
          />
        </svg>
      )
    case "heavy":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 28.08203125 30.2421875"
          className={className}
        >
          <path
            d="              M5.8247 30.2421H22.2577C24.8827 30.2421 26.3867 28.7381 26.3867 26.1541V18.6071H26.4137C27.5627 18.0601 28.0817 16.8981 28.0817 15.1211V12.0591C28.0817 9.6111 26.7017 8.1481 24.3357 8.1481H23.1597C23.9117 7.3421 24.3637 6.2751 24.3637 5.0721C24.3637 2.1191 21.9847 0.0001 19.0587 0.0001C16.7347 0.0001 14.6567 1.4081 14.0407 3.9241C13.4397 1.4081 11.3477 0.0001 9.0237 0.0001C6.0977 0.0001 3.7187 2.1191 3.7187 5.0721C3.7187 6.2751 4.1697 7.3421 4.9217 8.1481H3.7457C1.4087 8.1481 -0.0003 9.6111 -0.0003 12.0591V15.1211C-0.0003 16.8981 0.5197 18.0601 1.6677 18.6071H1.6957V26.1541C1.6957 28.7381 3.1997 30.2421 5.8247 30.2421ZM12.2087 8.1481H10.3907C8.4767 8.1481 7.3967 7.1501 7.3967 5.7281C7.3967 4.4301 8.1897 3.5141 9.5837 3.5141C11.0197 3.5141 12.2087 4.8261 12.2087 6.4801ZM15.8727 8.1481V6.4801C15.8727 4.8261 17.0767 3.5141 18.4977 3.5141C19.8927 3.5141 20.6857 4.4301 20.6857 5.7281C20.6857 7.1501 19.6057 8.1481 17.7047 8.1481ZM12.1547 15.4631H4.9357C4.3887 15.4631 4.1157 15.1761 4.1157 14.6291V12.5511C4.1157 12.0041 4.3887 11.7171 4.9357 11.7171H12.1547ZM15.9417 15.4631V11.7171H23.1467C23.6937 11.7171 23.9667 12.0041 23.9667 12.5511V14.7251C23.9667 15.2851 23.6937 15.4631 23.1467 15.4631ZM12.1407 26.5511H7.2047C6.3027 26.5511 5.7967 26.0041 5.7967 25.1701V19.0311H12.1407ZM15.9417 26.5511V19.0311H22.2847V25.1701C22.2847 26.0041 21.7657 26.5511 20.8637 26.5511Z"
            fill={color}
          />
        </svg>
      )
    case "light":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 25.908203125 27.9453125"
          className={className}
        >
          <path
            d="              M5.7147 27.9449H20.1937C22.5037 27.9449 23.8297 26.6599 23.8297 24.3359V15.3259H24.0487C25.2387 15.1479 25.9087 14.2459 25.9087 12.9469V9.6109C25.9087 8.1209 25.0607 7.1639 23.5707 7.1639H20.1387C20.9997 6.4669 21.5057 5.4279 21.5057 4.1839C21.5057 1.7229 19.6057 -0.0001 17.1037 -0.0001C15.1487 -0.0001 13.6037 1.1069 12.9477 2.9809C12.3047 1.1069 10.7597 -0.0001 8.8047 -0.0001C6.3027 -0.0001 4.4027 1.7229 4.4027 4.1839C4.4027 5.4279 4.9087 6.4669 5.7557 7.1639H2.3377C0.9027 7.1639 -0.0003 8.1209 -0.0003 9.6109V12.9469C-0.0003 14.2459 0.6697 15.1479 1.8457 15.3259H2.0777V24.3359C2.0777 26.6599 3.3907 27.9449 5.7147 27.9449ZM11.9497 7.1639H10.0627C7.7797 7.1639 6.3847 5.9199 6.3847 4.2519C6.3847 2.8299 7.4237 1.9689 8.9007 1.9689C10.6367 1.9689 11.9497 3.3219 11.9497 5.4819ZM13.9587 7.1639V5.4819C13.9587 3.3219 15.2577 1.9689 17.0077 1.9689C18.4847 1.9689 19.5237 2.8299 19.5237 4.2519C19.5237 5.9199 18.1287 7.1639 15.8457 7.1639ZM11.8537 13.7809H2.7067C2.0097 13.7809 1.6957 13.4399 1.6957 12.7419V9.8159C1.6957 9.1189 2.0097 8.7639 2.7067 8.7639H11.8537ZM14.0547 13.7809V8.7639H23.2017C23.8987 8.7639 24.2127 9.1189 24.2127 9.8159V12.7419C24.2127 13.4399 23.8987 13.7809 23.2017 13.7809ZM11.8537 26.3589H5.7147C4.4567 26.3589 3.7737 25.6619 3.7737 24.4179V15.3809H11.8537ZM14.0547 26.3589V15.3809H22.1347V24.4179C22.1347 25.6619 21.4377 26.3589 20.1937 26.3589Z"
            fill={color}
          />
        </svg>
      )
    case "medium":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 26.71484375 29.0390625"
          className={className}
        >
          <path
            d="              M5.9197 29.0392H20.7817C23.3657 29.0392 24.8147 27.6442 24.8147 25.0602V16.8712H24.8967C26.0857 16.5432 26.7147 15.5172 26.7147 14.0412V10.5682C26.7147 8.7222 25.6897 7.5742 23.8437 7.5742H21.4517C22.1897 6.8222 22.6267 5.8242 22.6267 4.6622C22.6267 1.9552 20.4527 0.0002 17.7457 0.0002C15.7227 0.0002 14.0277 1.1352 13.3577 3.1312C12.6877 1.1352 10.9787 0.0002 8.9687 0.0002C6.2477 0.0002 4.0877 1.9552 4.0877 4.6622C4.0877 5.8242 4.5117 6.8222 5.2497 7.5742H2.8707C1.0937 7.5742 -0.0003 8.7222 -0.0003 10.5682V14.0412C-0.0003 15.5172 0.6287 16.5432 1.8187 16.8712H1.9007V25.0602C1.9007 27.6442 3.3357 29.0392 5.9197 29.0392ZM12.0587 7.5742H10.0077C7.9027 7.5742 6.6997 6.4122 6.6997 4.9222C6.6997 3.4592 7.7247 2.5702 9.2017 2.5702C10.7867 2.5702 12.0587 3.8282 12.0587 5.7562ZM14.6427 7.5742V5.7562C14.6427 3.8282 15.9277 2.5702 17.5137 2.5702C18.9907 2.5702 20.0157 3.4592 20.0157 4.9222C20.0157 6.4122 18.7987 7.5742 16.7067 7.5742ZM11.9767 14.6152H3.5817C2.9257 14.6152 2.6527 14.3422 2.6527 13.6852V10.9242C2.6527 10.2672 2.9257 9.9942 3.5817 9.9942H11.9767ZM14.7247 14.6152V9.9942H23.1467C23.8027 9.9942 24.0627 10.2672 24.0627 10.9242V13.7132C24.0627 14.3552 23.8027 14.6152 23.1467 14.6152ZM11.9767 26.5922H6.2347C5.1547 26.5922 4.5527 25.9762 4.5527 24.9102V17.0352H11.9767ZM14.7247 26.5922V17.0352H22.1617V24.9102C22.1617 25.9762 21.5467 26.5922 20.4667 26.5922Z"
            fill={color}
          />
        </svg>
      )
    case "regular":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 26.291015625 28.65625"
          className={className}
        >
          <path
            d="              M5.9607 28.6558H20.3297C22.9007 28.6558 24.3227 27.3028 24.3227 24.7188V16.3238H24.4177C25.6207 16.0648 26.2907 15.0938 26.2907 13.6988V10.1038C26.2907 8.4358 25.3617 7.3828 23.6937 7.3828H20.9317C21.6567 6.6578 22.0797 5.6738 22.0797 4.5388C22.0797 1.8868 19.9887 -0.0002 17.3357 -0.0002C15.4217 -0.0002 13.8357 1.0528 13.1387 2.8848C12.4417 1.0528 10.8687 -0.0002 8.9417 -0.0002C6.3027 -0.0002 4.1977 1.8868 4.1977 4.5388C4.1977 5.6738 4.6207 6.6578 5.3597 7.3828H2.5977C0.9977 7.3828 -0.0003 8.4358 -0.0003 10.1038V13.6988C-0.0003 15.0938 0.6567 16.0648 1.8597 16.3238H1.9547V24.7188C1.9547 27.3028 3.3767 28.6558 5.9607 28.6558ZM12.0177 7.3828H9.8847C7.7387 7.3828 6.4807 6.1658 6.4807 4.6618C6.4807 3.1578 7.5747 2.2828 9.0777 2.2828C10.7047 2.2828 12.0177 3.5138 12.0177 5.5368ZM14.2597 7.3828V5.5368C14.2597 3.5138 15.5727 2.2828 17.1997 2.2828C18.7027 2.2828 19.7967 3.1578 19.7967 4.6618C19.7967 6.1658 18.5527 7.3828 16.3927 7.3828ZM11.9217 14.3558H3.1587C2.4747 14.3558 2.2017 14.0688 2.2017 13.3848V10.4038C2.2017 9.7208 2.4747 9.4468 3.1587 9.4468H11.9217ZM14.3557 14.3558V9.4468H23.1467C23.8297 9.4468 24.0897 9.7208 24.0897 10.4038V13.3848C24.0897 14.0688 23.8297 14.3558 23.1467 14.3558ZM11.9217 26.6058H5.9337C4.7987 26.6058 4.1567 25.9628 4.1567 24.8278V16.4198H11.9217ZM14.3557 26.6058V16.4198H22.1207V24.8278C22.1207 25.9628 21.4787 26.6058 20.3437 26.6058Z"
            fill={color}
          />
        </svg>
      )
    case "semibold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 27.029296875 29.326171875"
          className={className}
        >
          <path
            d="              M5.9067 29.3266H21.1367C23.7347 29.3266 25.1837 27.9046 25.1837 25.3206V17.2816H25.2517C26.4277 16.8986 27.0297 15.8456 27.0297 14.3006V10.9236C27.0297 8.9276 25.9217 7.7106 23.9527 7.7106H21.8617C22.5997 6.9456 23.0367 5.9336 23.0367 4.7576C23.0367 1.9956 20.8087 -0.0004 18.0607 -0.0004C15.9687 -0.0004 14.1777 1.2036 13.5217 3.3226C12.8657 1.2036 11.0747 -0.0004 8.9827 -0.0004C6.2207 -0.0004 3.9927 1.9956 3.9927 4.7576C3.9927 5.9336 4.4297 6.9456 5.1677 7.7106H3.0767C1.1617 7.7106 -0.0003 8.9276 -0.0003 10.9236V14.3006C-0.0003 15.8456 0.6017 16.8986 1.7777 17.2816H1.8457V25.3206C1.8457 27.9046 3.3087 29.3266 5.9067 29.3266ZM12.0997 7.7106H10.1037C8.0387 7.7106 6.8637 6.5766 6.8637 5.1136C6.8637 3.6916 7.8337 2.8026 9.2967 2.8026C10.8417 2.8026 12.0997 4.0606 12.0997 5.9336ZM14.9297 7.7106V5.9336C14.9297 4.0606 16.2017 2.8026 17.7457 2.8026C19.1957 2.8026 20.1657 3.6916 20.1657 5.1136C20.1657 6.5766 18.9907 7.7106 16.9397 7.7106ZM12.0177 14.8206H3.8967C3.2677 14.8206 2.9937 14.5336 2.9937 13.9046V11.3066C2.9937 10.6776 3.2677 10.3906 3.8967 10.3906H12.0177ZM15.0117 14.8206V10.3906H23.1467C23.7757 10.3906 24.0347 10.6776 24.0347 11.3066V13.9456C24.0347 14.5746 23.7757 14.8206 23.1467 14.8206ZM12.0177 26.5786H6.4667C5.4277 26.5786 4.8397 25.9906 4.8397 24.9786V17.5136H12.0177ZM15.0117 26.5786V17.5136H22.1897V24.9786C22.1897 25.9906 21.6017 26.5786 20.5627 26.5786Z"
            fill={color}
          />
        </svg>
      )
    case "thin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 25.40234375 26.98828125"
          className={className}
        >
          <path
            d="              M5.3867 26.988H20.0157C21.9847 26.988 23.1737 25.813 23.1737 23.844V14H23.5567C24.7047 13.945 25.4027 13.139 25.4027 11.949V8.955C25.4027 7.711 24.6507 6.877 23.4067 6.877H19.1137C20.1247 6.193 20.7267 5.086 20.7267 3.719C20.7267 1.49 19.0997 0 16.7757 0C14.7927 0 13.2887 1.176 12.7017 3.09C12.1137 1.176 10.6097 0 8.6137 0C6.3027 0 4.6757 1.49 4.6757 3.719C4.6757 5.086 5.2777 6.193 6.2887 6.877H1.9957C0.7657 6.877 -0.0003 7.711 -0.0003 8.955V11.949C-0.0003 13.139 0.6837 13.945 1.8317 14H2.2287V23.844C2.2287 25.813 3.4177 26.988 5.3867 26.988ZM11.8537 6.877H10.2817C7.8477 6.877 6.2617 5.592 6.2617 3.719C6.2617 2.393 7.2327 1.545 8.6547 1.545C10.5547 1.545 11.8537 3.076 11.8537 5.414ZM13.5487 6.877V5.414C13.5487 3.076 14.8477 1.545 16.7477 1.545C18.1697 1.545 19.1407 2.393 19.1407 3.719C19.1407 5.592 17.5547 6.877 15.1207 6.877ZM11.7577 13.029H2.1187C1.4087 13.029 1.0117 12.592 1.0117 11.881V9.023C1.0117 8.313 1.4087 7.861 2.1187 7.861H11.7577ZM13.6447 13.029V7.861H23.2967C24.0077 7.861 24.3907 8.313 24.3907 9.023V11.881C24.3907 12.592 24.0077 13.029 23.2967 13.029ZM11.7577 26.031H5.4137C4.0197 26.031 3.2407 25.252 3.2407 23.857V14.014H11.7577ZM13.6447 26.031V14.014H22.1487V23.857C22.1487 25.252 21.3827 26.031 19.9887 26.031Z"
            fill={color}
          />
        </svg>
      )
    case "ultralight":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 25.142578125 26.49609375"
          className={className}
        >
          <path
            d="              M5.2227 26.4961H19.9197C21.7247 26.4961 22.8317 25.3891 22.8317 23.5841V13.3301H23.3107C24.4457 13.3301 25.1427 12.5641 25.1427 11.4301V8.6271C25.1427 7.4921 24.4457 6.7401 23.3247 6.7401H18.5797C19.6877 6.0571 20.3297 4.9221 20.3297 3.4861C20.3297 1.3811 18.8397 0.0001 16.6117 0.0001C14.6157 0.0001 13.1247 1.2171 12.5777 3.1581C12.0177 1.2171 10.5277 0.0001 8.5317 0.0001C6.3027 0.0001 4.8127 1.3811 4.8127 3.4861C4.8127 4.9221 5.4547 6.0571 6.5627 6.7401H1.8187C0.6977 6.7401 -0.0003 7.4921 -0.0003 8.6271V11.4301C-0.0003 12.5641 0.6977 13.3301 1.8317 13.3301H2.3107V23.5841C2.3107 25.3891 3.4177 26.4961 5.2227 26.4961ZM11.8127 6.7401H10.3907C7.8747 6.7401 6.1937 5.4281 6.1937 3.4451C6.1937 2.1741 7.1227 1.3401 8.5177 1.3401C10.4997 1.3401 11.8127 2.9531 11.8127 5.3871ZM13.3297 6.7401V5.3871C13.3297 2.9531 14.6427 1.3401 16.6247 1.3401C18.0197 1.3401 18.9497 2.1741 18.9497 3.4451C18.9497 5.4281 17.2677 6.7401 14.7517 6.7401ZM11.7027 12.6461H1.8047C1.0937 12.6461 0.6697 12.1541 0.6697 11.4431V8.6131C0.6697 7.9021 1.0937 7.4101 1.8047 7.4101H11.7027ZM13.4397 12.6461V7.4101H23.3377C24.0487 7.4101 24.4727 7.9021 24.4727 8.6131V11.4431C24.4727 12.1541 24.0487 12.6461 23.3377 12.6461ZM11.7027 25.8671H5.2637C3.7867 25.8671 2.9807 25.0601 2.9807 23.5841V13.3161H11.7027ZM13.4397 25.8671V13.3161H22.1617V23.5841C22.1617 25.0601 21.3557 25.8671 19.8787 25.8671Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}
