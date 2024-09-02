import { IconProps } from "../../types"

export default function CableCoaxialIconIcon({
  weight = "regular",
  color = "#000000",
  className = "",
}: IconProps) {
  switch (weight) {
    case "black":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32.01953125 31.705078125"
          className={className}
        >
          <path
            d="              M23.8437 9.2555H24.4997C25.2387 9.2555 25.7577 8.7365 25.7577 7.9845V1.2985C25.7577 0.5465 25.2387 0.0005 24.4997 0.0005H23.8437C23.0917 0.0005 22.5727 0.5465 22.5727 1.2985V7.9845C22.5727 8.7365 23.0917 9.2555 23.8437 9.2555ZM15.5997 8.5315H21.1777V0.7245H15.5997C14.0957 0.7245 13.4257 1.4085 13.4257 2.9395V6.3435C13.4257 7.8755 14.0687 8.5315 15.5997 8.5315ZM-0.0003 10.2405C-0.0003 15.0395 3.2407 18.2795 8.0387 18.2795H23.9807C25.8807 18.2795 27.1797 19.5785 27.1797 21.4785C27.1797 23.3655 25.8807 24.6645 23.9807 24.6645H19.9887V29.4905H23.9807C28.7797 29.4905 32.0197 26.2505 32.0197 21.4785C32.0197 16.6665 28.7797 13.4255 23.9807 13.4255H8.0387C6.1387 13.4255 4.8397 12.1405 4.8397 10.2405C4.8397 8.3395 6.1387 7.0545 8.0387 7.0545H12.0317V2.2145H8.0387C3.2407 2.2145 -0.0003 5.4555 -0.0003 10.2405ZM27.1527 6.2485H30.7477C31.4867 6.2485 32.0197 5.7285 32.0197 4.9765V4.3065C32.0197 3.5685 31.4867 3.0355 30.7477 3.0355H27.1527ZM8.1757 31.7055C8.9277 31.7055 9.4477 31.1715 9.4477 30.4195V23.7345C9.4477 22.9825 8.9277 22.4355 8.1757 22.4355H7.5197C6.7817 22.4355 6.2617 22.9825 6.2617 23.7345V30.4195C6.2617 31.1715 6.7817 31.7055 7.5197 31.7055ZM16.4197 30.9665C17.9517 30.9665 18.5937 30.3245 18.5937 28.7935V25.3755C18.5937 23.8435 17.9237 23.1735 16.4197 23.1735H10.8417V30.9665ZM4.8677 28.6835V25.4845H1.2717C0.5197 25.4845 -0.0003 26.0035 -0.0003 26.7425V27.4125C-0.0003 28.1645 0.5197 28.6835 1.2717 28.6835Z"
            fill={color}
          />
        </svg>
      )
    case "bold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 30.419921875 30.529296875"
          className={className}
        >
          <path
            d="              M22.7087 8.5726H23.3927C23.9937 8.5726 24.4177 8.1486 24.4177 7.5336V1.0666C24.4177 0.4376 23.9937 -0.0004 23.3927 -0.0004H22.7087C22.0937 -0.0004 21.6567 0.4376 21.6567 1.0666V7.5336C21.6567 8.1486 22.0937 8.5726 22.7087 8.5726ZM14.8477 7.8476H20.3027V0.7386H14.8477C13.5217 0.7386 12.9607 1.3126 12.9607 2.6386V5.9746C12.9607 7.3006 13.5217 7.8476 14.8477 7.8476ZM-0.0003 9.7756C-0.0003 13.9586 3.0767 17.0356 7.2597 17.0356H23.1597C25.2927 17.0356 26.8927 18.6346 26.8927 20.7676C26.8927 22.8866 25.2797 24.4866 23.1597 24.4866H18.7987V27.9996H23.1597C27.3437 27.9996 30.4197 24.9376 30.4197 20.7676C30.4197 16.5836 27.3437 13.5076 23.1597 13.5076H7.2597C5.1267 13.5076 3.5137 11.9086 3.5137 9.7756C3.5137 7.6566 5.1407 6.0566 7.2597 6.0566H11.6077V2.5296H7.2597C3.0767 2.5296 -0.0003 5.6056 -0.0003 9.7756ZM25.7847 5.6736H29.3537C29.9827 5.6736 30.4197 5.2496 30.4197 4.6216V3.9646C30.4197 3.3636 29.9827 2.9256 29.3537 2.9256H25.7847ZM7.7107 30.5296C8.3267 30.5296 8.7497 30.1056 8.7497 29.4766V23.0096C8.7497 22.3946 8.3267 21.9566 7.7107 21.9566H7.0277C6.4117 21.9566 5.9887 22.3946 5.9887 23.0096V29.4766C5.9887 30.1056 6.4117 30.5296 7.0277 30.5296ZM15.5727 29.7906C16.8987 29.7906 17.4457 29.2446 17.4457 27.9176V24.5816C17.4457 23.2556 16.8847 22.6816 15.5727 22.6816H10.1037V29.7906ZM4.6347 27.6176V24.8696H1.0527C0.4237 24.8696 -0.0003 25.3066 -0.0003 25.9086V26.5786C-0.0003 27.1936 0.4237 27.6176 1.0527 27.6176Z"
            fill={color}
          />
        </svg>
      )
    case "heavy":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 31.267578125 31.14453125"
          className={className}
        >
          <path
            d="              M23.3107 8.941H23.9807C24.6507 8.941 25.1287 8.463 25.1287 7.779V1.189C25.1287 0.492 24.6507 0 23.9807 0H23.3107C22.6267 0 22.1347 0.492 22.1347 1.189V7.779C22.1347 8.463 22.6267 8.941 23.3107 8.941ZM15.2437 8.217H20.7677V0.738H15.2437C13.8227 0.738 13.2067 1.367 13.2067 2.803V6.18C13.2067 7.602 13.8087 8.217 15.2437 8.217ZM-0.0003 10.021C-0.0003 14.533 3.1587 17.705 7.6697 17.705H23.5837C25.5937 17.705 27.0427 19.127 27.0427 21.137C27.0427 23.146 25.5937 24.582 23.5837 24.582H19.4277V28.793H23.5837C28.0957 28.793 31.2677 25.635 31.2677 21.137C31.2677 16.639 28.0957 13.467 23.5837 13.467H7.6697C5.6597 13.467 4.2107 12.031 4.2107 10.021C4.2107 8.025 5.6737 6.59 7.6697 6.59H11.8267V2.365H7.6697C3.1587 2.365 -0.0003 5.523 -0.0003 10.021ZM26.5097 5.988H30.0917C30.7757 5.988 31.2677 5.496 31.2677 4.812V4.143C31.2677 3.473 30.7757 2.994 30.0917 2.994H26.5097ZM7.9567 31.145C8.6407 31.145 9.1187 30.666 9.1187 29.982V23.393C9.1187 22.709 8.6407 22.217 7.9567 22.217H7.2867C6.6037 22.217 6.1247 22.709 6.1247 23.393V29.982C6.1247 30.666 6.6037 31.145 7.2867 31.145ZM16.0097 30.42C17.4457 30.42 18.0467 29.818 18.0467 28.383V25.006C18.0467 23.57 17.4317 22.941 16.0097 22.941H10.4997V30.42ZM4.7577 28.191V25.197H1.1757C0.4787 25.197 -0.0003 25.676 -0.0003 26.346V27.016C-0.0003 27.713 0.4787 28.191 1.1757 28.191Z"
            fill={color}
          />
        </svg>
      )
    case "light":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 27.931640625 28.943359375"
          className={className}
        >
          <path
            d="              M21.0407 7.4786H21.8337C22.2437 7.4786 22.5317 7.2046 22.5317 6.7816V0.7246C22.5317 0.2866 22.2437 -0.0004 21.8337 -0.0004H21.0407C20.6177 -0.0004 20.3437 0.2866 20.3437 0.7246V6.7816C20.3437 7.2046 20.6177 7.4786 21.0407 7.4786ZM14.0137 6.6996H19.1137V0.7926H14.0137C13.1117 0.7926 12.6877 1.2036 12.6877 2.1196V5.3866C12.6877 6.2886 13.1117 6.6996 14.0137 6.6996ZM23.7617 4.7576H27.2067C27.6447 4.7576 27.9317 4.4846 27.9317 4.0746V3.4316C27.9317 3.0216 27.6447 2.7346 27.2067 2.7346H23.7617ZM-0.0003 9.1056C-0.0003 12.5366 2.7887 15.3266 6.2207 15.3266H21.7107C24.2127 15.3266 26.2367 17.3496 26.2367 19.8516C26.2367 22.3396 24.1997 24.3636 21.7107 24.3636H16.4607V26.0586H21.7107C25.1287 26.0586 27.9317 23.2696 27.9317 19.8516C27.9317 16.4196 25.1287 13.6306 21.7107 13.6306H6.2207C3.7187 13.6306 1.6957 11.6076 1.6957 9.1056C1.6957 6.6176 3.7187 4.5936 6.2207 4.5936H11.4707V2.8986H6.2207C2.7887 2.8986 -0.0003 5.6876 -0.0003 9.1056ZM6.8907 28.9436C7.3007 28.9436 7.5877 28.6696 7.5877 28.2456V22.1756C7.5877 21.7516 7.3007 21.4646 6.8907 21.4646H6.0977C5.6737 21.4646 5.4007 21.7516 5.4007 22.1756V28.2456C5.4007 28.6696 5.6737 28.9436 6.0977 28.9436ZM13.9177 28.1636C14.8207 28.1636 15.2307 27.7406 15.2307 26.8376V23.5706C15.2307 22.6676 14.8207 22.2576 13.9177 22.2576H8.8187V28.1636ZM4.1697 26.2226V24.1856H0.7107C0.2867 24.1856 -0.0003 24.4726 -0.0003 24.8826V25.5256C-0.0003 25.9356 0.2867 26.2226 0.7107 26.2226Z"
            fill={color}
          />
        </svg>
      )
    case "medium":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 29.380859375 29.77734375"
          className={className}
        >
          <path
            d="              M21.9847 8.1348H22.6817C23.2017 8.1348 23.5707 7.7658 23.5707 7.2458V0.9028C23.5707 0.3558 23.2017 -0.0002 22.6817 -0.0002H21.9847C21.4517 -0.0002 21.0817 0.3558 21.0817 0.9028V7.2458C21.0817 7.7658 21.4517 8.1348 21.9847 8.1348ZM14.3557 7.3968H19.7557V0.7248H14.3557C13.1657 0.7248 12.6737 1.2308 12.6737 2.4338V5.7148C12.6737 6.9178 13.1657 7.3968 14.3557 7.3968ZM-0.0003 9.4748C-0.0003 13.2618 2.9667 16.2288 6.7537 16.2288H22.6267C24.9097 16.2288 26.7147 18.0198 26.7147 20.3028C26.7147 22.5718 24.8967 24.3638 22.6267 24.3638H18.0467V27.0428H22.6267C26.4137 27.0428 29.3807 24.0898 29.3807 20.3028C29.3807 16.5158 26.4137 13.5488 22.6267 13.5488H6.7537C4.4707 13.5488 2.6797 11.7438 2.6797 9.4748C2.6797 7.2048 4.4847 5.4008 6.7537 5.4008H11.3337V2.7348H6.7537C2.9667 2.7348 -0.0003 5.6878 -0.0003 9.4748ZM24.8967 5.2908H28.4787C29.0257 5.2908 29.3807 4.9218 29.3807 4.4028V3.7458C29.3807 3.2128 29.0257 2.8578 28.4787 2.8578H24.8967ZM7.4097 29.7778C7.9437 29.7778 8.2987 29.4078 8.2987 28.8748V22.5308C8.2987 21.9978 7.9437 21.6288 7.4097 21.6288H6.7127C6.1797 21.6288 5.8107 21.9978 5.8107 22.5308V28.8748C5.8107 29.4078 6.1797 29.7778 6.7127 29.7778ZM15.0387 29.0388C16.2287 29.0388 16.7067 28.5468 16.7067 27.3438V24.0628C16.7067 22.8598 16.2147 22.3668 15.0387 22.3668H9.6387V29.0388ZM4.4847 26.9198V24.4868H0.9157C0.3687 24.4868 -0.0003 24.8418 -0.0003 25.3748V26.0308C-0.0003 26.5508 0.3687 26.9198 0.9157 26.9198Z"
            fill={color}
          />
        </svg>
      )
    case "regular":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 28.806640625 29.3671875"
          className={className}
        >
          <path
            d="              M21.5747 7.9027H22.2717C22.7637 7.9027 23.0917 7.5747 23.0917 7.0817V0.8337C23.0917 0.3277 22.7637 -0.0003 22.2717 -0.0003H21.5747C21.0817 -0.0003 20.7537 0.3277 20.7537 0.8337V7.0817C20.7537 7.5747 21.0817 7.9027 21.5747 7.9027ZM14.0817 7.1637H19.4417V0.7387H14.0817C12.9607 0.7387 12.5097 1.2027 12.5097 2.3247V5.5917C12.5097 6.7127 12.9607 7.1637 14.0817 7.1637ZM24.4047 5.0857H27.9727C28.4787 5.0857 28.8067 4.7577 28.8067 4.2797V3.6367C28.8067 3.1447 28.4787 2.8167 27.9727 2.8167H24.4047ZM-0.0003 9.3107C-0.0003 12.8787 2.9117 15.7777 6.4807 15.7777H22.3267C24.6917 15.7777 26.6057 17.6917 26.6057 20.0567C26.6057 22.4087 24.6777 24.3087 22.3267 24.3087H17.6227V26.5097H22.3267C25.8947 26.5097 28.8067 23.6247 28.8067 20.0567C28.8067 16.4887 25.8947 13.5757 22.3267 13.5757H6.4807C4.1157 13.5757 2.2017 11.6757 2.2017 9.3107C2.2017 6.9587 4.1287 5.0447 6.4807 5.0447H11.1837V2.8437H6.4807C2.9117 2.8437 -0.0003 5.7417 -0.0003 9.3107ZM7.2327 29.3677C7.7247 29.3677 8.0527 29.0387 8.0527 28.5337V22.2847C8.0527 21.7927 7.7247 21.4647 7.2327 21.4647H6.5347C6.0427 21.4647 5.7147 21.7927 5.7147 22.2847V28.5337C5.7147 29.0387 6.0427 29.3677 6.5347 29.3677ZM14.7247 28.6287C15.8457 28.6287 16.2967 28.1637 16.2967 27.0427V23.7757C16.2967 22.6547 15.8457 22.2027 14.7247 22.2027H9.3657V28.6287ZM4.4027 26.5367V24.2677H0.8337C0.3277 24.2677 -0.0003 24.5957 -0.0003 25.0877V25.7307C-0.0003 26.2087 0.3277 26.5367 0.8337 26.5367Z"
            fill={color}
          />
        </svg>
      )
    case "semibold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 29.83203125 30.10546875"
          className={className}
        >
          <path
            d="              M22.2987 8.3258H22.9827C23.5427 8.3258 23.9397 7.9298 23.9397 7.3688V0.9708C23.9397 0.3968 23.5427 -0.0002 22.9827 -0.0002H22.2987C21.7247 -0.0002 21.3277 0.3968 21.3277 0.9708V7.3688C21.3277 7.9298 21.7247 8.3258 22.2987 8.3258ZM14.5607 7.5878H19.9887V0.7248H14.5607C13.3167 0.7248 12.7967 1.2718 12.7967 2.5158V5.8238C12.7967 7.0818 13.3167 7.5878 14.5607 7.5878ZM-0.0003 9.5978C-0.0003 13.5628 3.0077 16.5698 6.9727 16.5698H22.8597C25.0747 16.5698 26.7837 18.2788 26.7837 20.5078C26.7837 22.7088 25.0607 24.4178 22.8597 24.4178H18.3747V27.4528H22.8597C26.8107 27.4528 29.8317 24.4588 29.8317 20.5078C29.8317 16.5428 26.8107 13.5348 22.8597 13.5348H6.9727C4.7577 13.5348 3.0347 11.8128 3.0347 9.5978C3.0347 7.3968 4.7717 5.6878 6.9727 5.6878H11.4567V2.6388H6.9727C3.0077 2.6388 -0.0003 5.6468 -0.0003 9.5978ZM25.2797 5.4548H28.8617C29.4357 5.4548 29.8317 5.0588 29.8317 4.4978V3.8418C29.8317 3.2808 29.4357 2.8848 28.8617 2.8848H25.2797ZM7.5337 30.1058C8.1077 30.1058 8.4907 29.7088 8.4907 29.1348V22.7358C8.4907 22.1618 8.1077 21.7658 7.5337 21.7658H6.8497C6.2887 21.7658 5.8927 22.1618 5.8927 22.7358V29.1348C5.8927 29.7088 6.2887 30.1058 6.8497 30.1058ZM15.2717 29.3668C16.5157 29.3668 17.0347 28.8338 17.0347 27.5898V24.2808C17.0347 23.0368 16.5017 22.5038 15.2717 22.5038H9.8437V29.3668ZM4.5527 27.2208V24.6508H0.9707C0.3967 24.6508 -0.0003 25.0468 -0.0003 25.6078V26.2638C-0.0003 26.8238 0.3967 27.2208 0.9707 27.2208Z"
            fill={color}
          />
        </svg>
      )
    case "thin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 26.755859375 28.3828125"
          className={className}
        >
          <path
            d="              M20.3297 6.9175H21.2457C21.5747 6.9175 21.7927 6.6995 21.7927 6.3715V0.5605C21.7927 0.2185 21.5747 -0.0005 21.2457 -0.0005H20.3297C20.0017 -0.0005 19.7837 0.2185 19.7837 0.5605V6.3715C19.7837 6.6995 20.0017 6.9175 20.3297 6.9175ZM13.9177 6.0705H18.6757V0.8335H13.9177C13.2887 0.8335 12.9337 1.2035 12.9337 1.8325V5.0995C12.9337 5.7145 13.2887 6.0705 13.9177 6.0705ZM22.9007 4.3205H26.1957C26.5367 4.3205 26.7557 4.1015 26.7557 3.7735V3.1445C26.7557 2.8165 26.5367 2.5975 26.1957 2.5975H22.9007ZM-0.0003 8.8185C-0.0003 12.0585 2.6387 14.6975 5.8787 14.6975H20.8767C23.5707 14.6975 25.7437 16.8715 25.7437 19.5645C25.7437 22.2305 23.5567 24.4175 20.8767 24.4175H14.9297V25.4295H20.8767C24.1177 25.4295 26.7557 22.7915 26.7557 19.5645C26.7557 16.3245 24.1177 13.6855 20.8767 13.6855H5.8787C3.1997 13.6855 1.0117 11.4985 1.0117 8.8185C1.0117 6.1385 3.1997 3.9645 5.8787 3.9645H11.8267V2.9535H5.8787C2.6387 2.9535 -0.0003 5.5785 -0.0003 8.8185ZM6.4257 28.3825C6.7537 28.3825 6.9727 28.1645 6.9727 27.8355V22.0115C6.9727 21.6835 6.7537 21.4645 6.4257 21.4645H5.5097C5.1817 21.4645 4.9627 21.6835 4.9627 22.0115V27.8355C4.9627 28.1645 5.1817 28.3825 5.5097 28.3825ZM12.8377 27.5355C13.4667 27.5355 13.8227 27.1795 13.8227 26.5645V23.2965C13.8227 22.6545 13.4667 22.2985 12.8377 22.2985H8.0797V27.5355ZM3.8557 25.7855V24.0625H0.5607C0.2187 24.0625 -0.0003 24.2815 -0.0003 24.6095V25.2385C-0.0003 25.5525 0.2187 25.7855 0.5607 25.7855Z"
            fill={color}
          />
        </svg>
      )
    case "ultralight":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 26.16796875 28.109375"
          className={className}
        >
          <path
            d="              M19.9747 6.6448H20.9457C21.2327 6.6448 21.4097 6.4528 21.4097 6.1798V0.4788C21.4097 0.1918 21.2327 -0.0002 20.9457 -0.0002H19.9747C19.6877 -0.0002 19.5097 0.1918 19.5097 0.4788V6.1798C19.5097 6.4528 19.6877 6.6448 19.9747 6.6448ZM13.8637 5.7698H18.4567V0.8748H13.8637C13.3987 0.8748 13.0567 1.2028 13.0567 1.6958V4.9628C13.0567 5.4418 13.3987 5.7698 13.8637 5.7698ZM22.4627 4.1018H25.6757C25.9767 4.1018 26.1677 3.9098 26.1677 3.6368V3.0078C26.1677 2.7348 25.9767 2.5428 25.6757 2.5428H22.4627ZM-0.0003 8.6818C-0.0003 11.8258 2.5567 14.3828 5.7147 14.3828H20.4527C23.2287 14.3828 25.4977 16.6388 25.4977 19.4278C25.4977 22.1898 23.2287 24.4458 20.4527 24.4458H14.1367V25.1148H20.4527C23.5977 25.1148 26.1677 22.5588 26.1677 19.4278C26.1677 16.2828 23.5977 13.7128 20.4527 13.7128H5.7147C2.9257 13.7128 0.6697 11.4568 0.6697 8.6818C0.6697 5.9058 2.9257 3.6508 5.7147 3.6508H12.0177V2.9808H5.7147C2.5567 2.9808 -0.0003 5.5508 -0.0003 8.6818ZM6.1937 28.1098C6.4667 28.1098 6.6587 27.9178 6.6587 27.6448V21.9438C6.6587 21.6558 6.4667 21.4648 6.1937 21.4648H5.2087C4.9357 21.4648 4.7437 21.6558 4.7437 21.9438V27.6448C4.7437 27.9178 4.9357 28.1098 5.2087 28.1098ZM12.2907 27.2348C12.7697 27.2348 13.0977 26.9058 13.0977 26.4278V23.1598C13.0977 22.6678 12.7697 22.3398 12.2907 22.3398H7.6977V27.2348ZM3.7047 25.5668V24.0078H0.4787C0.1917 24.0078 -0.0003 24.1988 -0.0003 24.4728V25.1018C-0.0003 25.3748 0.1917 25.5668 0.4787 25.5668Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}
