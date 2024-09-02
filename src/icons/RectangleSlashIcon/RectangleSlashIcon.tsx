import { IconProps } from "../../types"

export default function RectangleSlashIconIcon({
  weight = "regular",
  color = "#000000",
  className = "",
}: IconProps) {
  switch (weight) {
    case "black":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 33.03125 30.223406722736666"
          className={className}
        >
          <path
            d="              M29.5177 29.8595C30.0097 30.3375 30.8027 30.3515 31.2817 29.8595C31.7457 29.3805 31.7737 28.5875 31.2817 28.0955L3.5277 0.3695C3.0347 -0.1235 2.2287 -0.1235 1.7497 0.3695C1.2717 0.8335 1.2717 1.6545 1.7497 2.1325ZM27.6717 1.5725H7.6567L12.5097 6.4255H26.9337C27.7677 6.4255 28.1777 6.7675 28.1777 7.6695V21.8205C28.1777 21.9025 28.1777 21.9845 28.1637 22.0665L32.3617 26.2635C32.7987 25.4705 33.0317 24.4725 33.0317 23.3245V6.9315C33.0317 3.5405 31.0487 1.5725 27.6717 1.5725ZM5.3597 28.6835H25.4157L20.5487 23.8305H6.0977C5.2637 23.8305 4.8537 23.4745 4.8537 22.5725V8.4085C4.8537 8.3265 4.8677 8.2305 4.8677 8.1625L0.6697 3.9785C0.2327 4.7715 -0.0003 5.7695 -0.0003 6.9315V23.3245C-0.0003 26.7015 1.9827 28.6835 5.3597 28.6835Z"
            fill={color}
          />
        </svg>
      )
    case "bold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32.634765625 29.9072265625"
          className={className}
        >
          <path
            d="              M29.3537 29.569C29.8047 30.02 30.5427 30.02 30.9807 29.569C31.4177 29.118 31.4317 28.393 30.9807 27.942L3.3497 0.338C2.8987 -0.113 2.1597 -0.113 1.7087 0.338C1.2717 0.776 1.2717 1.528 1.7087 1.965ZM27.8087 1.883H7.4927L11.0197 5.411H27.4257C28.5197 5.411 29.1077 5.944 29.1077 7.106V22.418C29.1077 22.774 29.0117 23.034 28.8337 23.211L31.8007 26.178C32.3477 25.454 32.6347 24.456 32.6347 23.225V6.682C32.6347 3.579 30.9397 1.883 27.8087 1.883ZM4.8267 28.024H25.2107L21.6837 24.497H5.2087C4.1157 24.497 3.5277 23.963 3.5277 22.801V7.475C3.5277 7.12 3.6367 6.832 3.8147 6.655L0.8617 3.702C0.2867 4.426 -0.0003 5.438 -0.0003 6.682V23.225C-0.0003 26.329 1.7087 28.024 4.8267 28.024Z"
            fill={color}
          />
        </svg>
      )
    case "heavy":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32.83984375 30.083270527091738"
          className={className}
        >
          <path
            d="              M29.4357 29.7293C29.9137 30.1943 30.6797 30.2083 31.1307 29.7293C31.5957 29.2643 31.6097 28.4993 31.1307 28.0343L3.4457 0.3483C2.9667 -0.1167 2.2017 -0.1167 1.7227 0.3483C1.2717 0.8133 1.2717 1.5923 1.7227 2.0573ZM27.7267 1.7153H7.5747L11.7987 5.9543H27.1657C28.1227 5.9543 28.6157 6.3783 28.6157 7.4173V22.1143C28.6157 22.3193 28.5607 22.4833 28.4787 22.6063L32.1017 26.2293C32.5937 25.4643 32.8397 24.4653 32.8397 23.2763V6.8153C32.8397 3.5613 30.9937 1.7153 27.7267 1.7153ZM5.1137 28.3763H25.3207L21.0817 24.1513H5.6877C4.7167 24.1513 4.2247 23.7143 4.2247 22.6743V7.9773C4.2247 7.7583 4.2797 7.5813 4.3747 7.4583L0.7657 3.8483C0.2597 4.6143 -0.0003 5.6123 -0.0003 6.8153V23.2763C-0.0003 26.5303 1.8597 28.3763 5.1137 28.3763Z"
            fill={color}
          />
        </svg>
      )
    case "light":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32.01953125 28.98448171898572"
          className={className}
        >
          <path
            d="              M29.1487 28.7387C29.4627 29.0667 29.9827 29.0667 30.2967 28.7387C30.6247 28.4107 30.6247 27.9047 30.2967 27.5897L2.9397 0.2457C2.6387 -0.0683 2.1187 -0.0953 1.7777 0.2457C1.4767 0.5467 1.4767 1.0797 1.7777 1.3947ZM27.9867 2.1057H6.8087L8.4907 3.8007H27.9587C29.4627 3.8007 30.3247 4.6077 30.3247 6.1937V22.7777C30.3247 23.7067 29.9687 24.3227 29.2987 24.5957L30.6527 25.9497C31.5407 25.3617 32.0197 24.3227 32.0197 22.8727V6.0977C32.0197 3.4727 30.6657 2.1057 27.9867 2.1057ZM4.0337 26.8657H25.2797L23.5837 25.1697H4.0607C2.5297 25.1697 1.6957 24.3637 1.6957 22.7777V6.1937C1.6957 5.2367 2.0507 4.6207 2.7207 4.3337L1.3947 2.9947C0.4787 3.5817 -0.0003 4.6347 -0.0003 6.0977V22.8727C-0.0003 25.5117 1.3677 26.8657 4.0337 26.8657Z"
            fill={color}
          />
        </svg>
      )
    case "medium":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32.388671875 29.707295733114815"
          className={className}
        >
          <path
            d="              M29.2437 29.3845C29.6677 29.8085 30.3657 29.8215 30.7757 29.3845C31.1997 28.9605 31.2127 28.2765 30.7757 27.8535L3.2267 0.3175C2.8167 -0.1055 2.1187 -0.1055 1.6817 0.3175C1.2717 0.7285 1.2717 1.4385 1.6817 1.8625ZM27.9047 2.0955H7.3827L10.0627 4.7615H27.7407C28.9977 4.7615 29.7087 5.4315 29.7087 6.7575V22.8085C29.7087 23.3275 29.5447 23.7105 29.2577 23.9425L31.4317 26.1305C32.0607 25.4465 32.3887 24.4485 32.3887 23.1775V6.5245C32.3887 3.6125 30.8577 2.0955 27.9047 2.0955ZM4.4847 27.6065H25.0877L22.4087 24.9275H4.6487C3.3767 24.9275 2.6797 24.2705 2.6797 22.9445V6.8945C2.6797 6.3475 2.8437 5.9505 3.1447 5.7045L0.9847 3.5305C0.3277 4.2145 -0.0003 5.2265 -0.0003 6.5245V23.1775C-0.0003 26.0895 1.5317 27.6065 4.4847 27.6065Z"
            fill={color}
          />
        </svg>
      )
    case "regular":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32.23828125 29.596233424810748"
          className={className}
        >
          <path
            d="              M29.1757 29.2837C29.5997 29.6937 30.2697 29.7077 30.6657 29.2837C31.0767 28.8737 31.0897 28.2037 30.6657 27.7937L3.1717 0.3127C2.7617 -0.0973 2.0917 -0.1113 1.6677 0.3127C1.2717 0.7097 1.2717 1.3927 1.6677 1.8027ZM27.9457 2.1997H7.3277L9.5297 4.4007H27.9177C29.2717 4.4007 30.0367 5.1387 30.0367 6.5607V23.0217C30.0367 23.6367 29.8457 24.0877 29.4907 24.3617L31.2407 26.0977C31.8967 25.4417 32.2387 24.4437 32.2387 23.1447V6.4377C32.2387 3.6217 30.8167 2.1997 27.9457 2.1997ZM4.2927 27.3697H25.0197L22.8187 25.1687H4.3207C2.9527 25.1687 2.2017 24.4437 2.2017 23.0217V6.5607C2.2017 5.9047 2.4067 5.4397 2.7757 5.1667L1.0527 3.4437C0.3557 4.0857 -0.0003 5.0977 -0.0003 6.4377V23.1447C-0.0003 25.9617 1.4357 27.3697 4.2927 27.3697Z"
            fill={color}
          />
        </svg>
      )
    case "semibold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32.498046875 29.79958088936481"
          className={className}
        >
          <path
            d="              M29.2847 29.4717C29.7227 29.9087 30.4337 29.9087 30.8707 29.4717C31.2947 29.0337 31.3087 28.3367 30.8707 27.8997L3.2817 0.3227C2.8437 -0.1003 2.1327 -0.1143 1.6957 0.3227C1.2717 0.7467 1.2717 1.4847 1.6957 1.9087ZM27.8637 2.0047H7.4237L10.4727 5.0537H27.6037C28.7927 5.0537 29.4497 5.6547 29.4497 6.9127V22.6357C29.4497 23.0867 29.3127 23.4287 29.0667 23.6337L31.5957 26.1497C32.1837 25.4517 32.4977 24.4537 32.4977 23.1957V6.5987C32.4977 3.6047 30.8847 2.0047 27.8637 2.0047ZM4.6347 27.7897H25.1427L22.0937 24.7407H4.8947C3.6917 24.7407 3.0487 24.1397 3.0487 22.8817V7.1457C3.0487 6.6807 3.1857 6.3387 3.4457 6.1197L0.9297 3.6177C0.3147 4.3157 -0.0003 5.3137 -0.0003 6.5987V23.1957C-0.0003 26.2037 1.6137 27.7897 4.6347 27.7897Z"
            fill={color}
          />
        </svg>
      )
    case "thin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 31.71875 28.171335440041027"
          className={className}
        >
          <path
            d="              M29.0937 28.0128C29.2987 28.2178 29.5997 28.2308 29.8047 28.0128C30.0237 27.8068 30.0097 27.5068 29.8047 27.3018L2.6527 0.1488C2.4747 -0.0282 2.1597 -0.0692 1.9417 0.1488C1.7367 0.3408 1.7367 0.6688 1.9417 0.8598ZM28.0407 1.9808H6.1117L7.1367 2.9928H27.9997C29.7227 2.9928 30.7067 3.9228 30.7067 5.7138V22.4618C30.7067 23.8018 30.1187 24.6358 29.0527 24.9088L29.8867 25.7428C31.0897 25.2508 31.7187 24.1428 31.7187 22.5028V5.6588C31.7187 3.2658 30.4607 1.9808 28.0407 1.9808ZM3.6917 26.1808H25.6207L24.6097 25.1688H3.7187C1.9417 25.1688 1.0117 24.2388 1.0117 22.4618V5.7138C1.0117 4.3468 1.5857 3.5128 2.6657 3.2248L1.8457 2.4048C0.6287 2.8838 -0.0003 3.9908 -0.0003 5.6588V22.5028C-0.0003 24.9228 1.2717 26.1808 3.6917 26.1808Z"
            fill={color}
          />
        </svg>
      )
    case "ultralight":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 31.568359375 27.754566991759205"
          className={className}
        >
          <path
            d="              M29.0667 27.6464C29.2027 27.7834 29.4087 27.7974 29.5587 27.6464C29.7087 27.4964 29.6957 27.2914 29.5587 27.1684L2.5017 0.0984C2.3787 -0.0116 2.1877 -0.0526 2.0097 0.0984C1.8727 0.2344 1.8727 0.4534 2.0097 0.5904ZM28.0687 1.9164H5.7697L6.4397 2.5864H28.0277C29.8457 2.5864 30.8987 3.5704 30.8987 5.4574V22.2874C30.8987 23.8464 30.2017 24.7894 28.9297 25.0764L29.4907 25.6504C30.8577 25.1994 31.5687 24.0644 31.5687 22.3284V5.4304C31.5687 3.1744 30.3517 1.9164 28.0687 1.9164ZM3.5137 25.8424H25.8127L25.1427 25.1724H3.5407C1.6547 25.1724 0.6697 24.1884 0.6697 22.2874V5.4574C0.6697 3.8984 1.3397 2.9554 2.6387 2.6684L2.0777 2.1074C0.7107 2.5454 -0.0003 3.6804 -0.0003 5.4304V22.3284C-0.0003 24.6254 1.2167 25.8424 3.5137 25.8424Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}
