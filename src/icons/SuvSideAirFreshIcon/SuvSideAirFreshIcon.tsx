import { IconProps } from "../../types"

export default function SuvSideAirFreshIconIcon({
  weight = "regular",
  color = "#000000",
  className = "",
}: IconProps) {
  switch (weight) {
    case "black":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 52.390625 24.951171875"
          className={className}
        >
          <path
            d="              M12.4277 24.9511C14.6837 24.9511 16.6527 23.6801 17.6507 21.8201H34.9457C35.9437 23.6801 37.9117 24.9511 40.1817 24.9511C42.4377 24.9511 44.4067 23.6801 45.3907 21.8201H47.8927C50.6677 21.8201 52.3907 20.0161 52.3907 17.1991V10.6781C52.3907 8.7231 51.6117 6.4391 50.4357 4.6891L49.8067 3.7601C47.9747 1.0661 45.6917 0.0001 42.0407 0.0001H30.3927C24.4867 0.0001 21.9567 0.6151 18.3617 2.8711L16.6937 3.9101L19.5917 7.6971L20.8767 6.8911C23.7477 5.1001 25.2657 4.7301 30.3927 4.7301H42.0407C44.1327 4.7301 44.9667 5.1271 45.9237 6.4801L46.5527 7.3691C47.2777 8.3941 47.6597 9.6111 47.6597 10.6781V16.0781C47.6597 16.7751 47.3597 17.0901 46.6757 17.0901H45.7597C44.9397 14.7661 42.7517 13.1111 40.1817 13.1111C37.5977 13.1111 35.3967 14.7661 34.5897 17.0901H18.0057C17.1997 14.7661 14.9977 13.1111 12.4277 13.1111C9.8577 13.1111 7.6567 14.7661 6.8357 17.0901H5.7147C5.0997 17.0901 4.7307 16.7071 4.7307 16.0781V14.5881C4.7307 12.7421 5.7427 11.8671 8.7367 11.4981L13.5347 10.9101L10.2127 6.5491L8.1487 6.8081C2.8577 7.4511 -0.0003 10.0761 -0.0003 14.5881V16.9121C-0.0003 20.1111 1.9007 21.8201 4.8267 21.8201H7.2047C8.2027 23.6801 10.1717 24.9511 12.4277 24.9511ZM20.0707 12.2361H23.2017V13.2341C23.2017 14.3691 24.1717 14.6971 25.0057 14.1641L28.4787 11.9221C29.2577 11.4301 29.2717 10.4591 28.4787 9.9531L25.0337 7.7381C24.1717 7.1781 23.2017 7.5061 23.2017 8.6681V9.6251H20.0707C18.7437 9.6251 18.2797 9.3791 17.4177 8.2581L13.8227 3.5681C12.5917 1.9411 11.1157 1.2991 8.9007 1.2991H5.6597C4.9497 1.2991 4.3477 1.8871 4.3477 2.6111C4.3477 3.3221 4.9497 3.9101 5.6597 3.9101H8.9007C10.4587 3.9101 10.9787 4.1421 11.7717 5.1681L15.3267 9.8711C16.5837 11.5251 18.0197 12.2361 20.0707 12.2361ZM12.4277 20.7541C11.5117 20.7541 10.7867 20.0291 10.7867 19.1131C10.7867 18.1971 11.5117 17.4731 12.4277 17.4731C13.3437 17.4731 14.0687 18.1971 14.0687 19.1131C14.0687 20.0291 13.3437 20.7541 12.4277 20.7541ZM40.1817 20.7541C39.2517 20.7541 38.5407 20.0291 38.5407 19.1131C38.5407 18.1971 39.2517 17.4731 40.1817 17.4731C41.0837 17.4731 41.8227 18.1971 41.8227 19.1131C41.8227 20.0291 41.0837 20.7541 40.1817 20.7541Z"
            fill={color}
          />
        </svg>
      )
    case "bold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 50.44921875 23.583984375"
          className={className}
        >
          <path
            d="              M11.6487 23.5839C13.8227 23.5839 15.6677 22.2989 16.4887 20.4529H34.4257C35.2457 22.2989 37.0917 23.5839 39.2657 23.5839C41.4257 23.5839 43.2847 22.2989 44.1057 20.4529H46.4567C49.0407 20.4529 50.4497 18.9359 50.4497 16.1739V9.9939C50.4497 8.1619 49.7387 6.0429 48.6177 4.3889L47.9887 3.4729C46.2927 0.9839 44.1877 -0.0001 40.7697 -0.0001H29.5997C23.8297 -0.0001 21.4517 0.5739 17.9787 2.7479L16.0367 3.9649L18.1567 6.7399L19.8247 5.7009C22.7637 3.8689 24.4177 3.4589 29.5997 3.4589H40.7697C42.9977 3.4589 44.1057 3.9789 45.1307 5.4549L45.7597 6.3579C46.5387 7.4649 46.9767 8.8049 46.9767 9.9939V15.6819C46.9767 16.5699 46.6077 16.9809 45.7867 16.9809H44.3927C43.8187 14.6699 41.7537 12.9879 39.2657 12.9879C36.7777 12.9879 34.6997 14.6699 34.1247 16.9809H16.7887C16.2147 14.6699 14.1367 12.9879 11.6487 12.9879C9.1597 12.9879 7.0817 14.6699 6.5077 16.9809H4.6617C3.9097 16.9809 3.4587 16.4879 3.4587 15.6679V13.8769C3.4587 11.7309 4.7847 10.5959 7.9977 10.1989L12.7147 9.6249L10.2817 6.4259L7.5607 6.7679C2.5837 7.3689 -0.0003 9.7479 -0.0003 13.8769V16.2149C-0.0003 18.9219 1.5997 20.4529 4.1567 20.4529H6.8087C7.6287 22.2989 9.4747 23.5839 11.6487 23.5839ZM19.2087 11.4159H22.3537V12.4959C22.3537 13.5489 23.2697 13.8499 24.0487 13.3579L27.4937 11.1289C28.2187 10.6779 28.2327 9.7759 27.4937 9.2969L24.0627 7.0959C23.2697 6.5759 22.3537 6.8909 22.3537 7.9429V9.0099H19.2087C17.8967 9.0099 17.4047 8.7499 16.5567 7.6429L12.9067 2.8709C11.7027 1.2989 10.2947 0.6839 8.1487 0.6839H4.8537C4.1837 0.6839 3.6507 1.2309 3.6507 1.8869C3.6507 2.5429 4.1837 3.0899 4.8537 3.0899H8.1487C9.6797 3.0899 10.2407 3.3359 11.0197 4.3479L14.6287 9.1189C15.8457 10.7329 17.2127 11.4159 19.2087 11.4159ZM11.6487 20.3849C10.4997 20.3849 9.5977 19.4829 9.5977 18.3199C9.5977 17.1719 10.4997 16.2699 11.6487 16.2699C12.7967 16.2699 13.7127 17.1719 13.7127 18.3199C13.7127 19.4829 12.7967 20.3849 11.6487 20.3849ZM39.2657 20.3849C38.1037 20.3849 37.2017 19.4829 37.2017 18.3199C37.2017 17.1719 38.1037 16.2699 39.2657 16.2699C40.4137 16.2699 41.3297 17.1719 41.3297 18.3199C41.3297 19.4829 40.4137 20.3849 39.2657 20.3849Z"
            fill={color}
          />
        </svg>
      )
    case "heavy":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 51.474609375 24.30859375"
          className={className}
        >
          <path
            d="              M12.0587 24.3087C14.2737 24.3087 16.1877 23.0237 17.1037 21.1637H34.6997C35.6157 23.0237 37.5297 24.3087 39.7437 24.3087C41.9587 24.3087 43.8727 23.0237 44.7887 21.1637H47.2087C49.9027 21.1637 51.4747 19.4957 51.4747 16.7067V10.3497C51.4747 8.4497 50.7227 6.2477 49.5747 4.5387L48.9457 3.6227C47.1817 1.0257 44.9807 -0.0003 41.4397 -0.0003H30.0237C24.1857 -0.0003 21.7247 0.5877 18.1837 2.8027L16.3787 3.9377L18.9217 7.2457L20.3847 6.3297C23.2837 4.5117 24.8687 4.1287 30.0237 4.1287H41.4397C43.5997 4.1287 44.5567 4.5797 45.5547 6.0017L46.1697 6.8907C46.9217 7.9567 47.3457 9.2287 47.3457 10.3497V15.8867C47.3457 16.6797 47.0037 17.0347 46.2657 17.0347H45.1177C44.4197 14.7247 42.2737 13.0427 39.7437 13.0427C37.2017 13.0427 35.0687 14.7247 34.3577 17.0347H17.4317C16.7347 14.7247 14.6017 13.0427 12.0587 13.0427C9.5297 13.0427 7.3827 14.7247 6.6857 17.0347H5.2087C4.5387 17.0347 4.1287 16.5977 4.1287 15.8727V14.2457C4.1287 12.2637 5.2907 11.2657 8.3947 10.8827L13.1387 10.2947L10.2407 6.4937L7.8747 6.7817C2.7207 7.4097 -0.0003 9.9257 -0.0003 14.2457V16.5707C-0.0003 19.5507 1.7497 21.1637 4.4977 21.1637H7.0137C7.9297 23.0237 9.8437 24.3087 12.0587 24.3087ZM19.6597 11.8537H22.8047V12.8787C22.8047 13.9727 23.7477 14.3007 24.5547 13.7817L28.0137 11.5527C28.7657 11.0747 28.7797 10.1307 28.0137 9.6387L24.5687 7.4377C23.7477 6.8907 22.8047 7.2187 22.8047 8.3267V9.3247H19.6597C18.3477 9.3247 17.8687 9.0777 17.0077 7.9707L13.3847 3.2407C12.1677 1.6407 10.7327 0.9977 8.5447 0.9977H5.2777C4.5937 0.9977 4.0197 1.5727 4.0197 2.2697C4.0197 2.9527 4.5937 3.5277 5.2777 3.5277H8.5447C10.0897 3.5277 10.6367 3.7597 11.4157 4.7847L14.9977 9.5157C16.2427 11.1427 17.6367 11.8537 19.6597 11.8537ZM12.0587 20.5767C11.0337 20.5767 10.2267 19.7697 10.2267 18.7437C10.2267 17.7047 11.0337 16.8987 12.0587 16.8987C13.0837 16.8987 13.9047 17.7047 13.9047 18.7437C13.9047 19.7697 13.0837 20.5767 12.0587 20.5767ZM39.7437 20.5767C38.7187 20.5767 37.9117 19.7697 37.9117 18.7437C37.9117 17.7047 38.7187 16.8987 39.7437 16.8987C40.7697 16.8987 41.5897 17.7047 41.5897 18.7437C41.5897 19.7697 40.7697 20.5767 39.7437 20.5767Z"
            fill={color}
          />
        </svg>
      )
    case "light":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 47.359375 21.4375"
          className={className}
        >
          <path
            d="              M10.4867 21.4378C12.4957 21.4378 14.1637 20.1658 14.7387 18.3608H33.3867C33.9607 20.1658 35.6287 21.4378 37.6387 21.4378C39.6617 21.4378 41.3297 20.1658 41.8907 18.3608H44.1737C46.3477 18.3608 47.3597 17.2268 47.3597 14.8748V8.9418C47.3597 7.2738 46.7717 5.4548 45.7327 3.9378L45.1177 3.0348C43.6547 0.9158 41.7267 -0.0002 38.7327 -0.0002H28.1917C22.6547 -0.0002 20.5077 0.5058 17.2407 2.5698L14.6567 4.1838L15.6957 5.5368L18.1427 4.0058C21.1507 2.1188 22.9417 1.6818 28.1917 1.6818H38.7327C41.1387 1.6818 42.6017 2.3648 43.7227 4.0058L44.3377 4.8948C45.1997 6.1658 45.6777 7.5738 45.6777 8.9418V14.9708C45.6777 16.1058 45.1857 16.6658 44.0917 16.6658H42.0957C41.9457 14.3148 40.0447 12.5098 37.6387 12.5098C35.2457 12.5098 33.3457 14.3148 33.1957 16.6658H14.9437C14.7927 14.3148 12.8927 12.5098 10.4867 12.5098C8.0797 12.5098 6.1797 14.3148 6.0297 16.6658H3.2817C2.2557 16.6658 1.6957 16.0368 1.6957 14.8888V12.7558C1.6957 10.1718 3.3227 8.7498 6.8767 8.3128L11.6757 7.7248L10.4997 6.1518L6.6717 6.6308C2.2017 7.1778 -0.0003 9.2148 -0.0003 12.7558V15.0798C-0.0003 17.1578 1.1617 18.3608 3.1997 18.3608H6.2347C6.8087 20.1658 8.4767 21.4378 10.4867 21.4378ZM17.7867 10.1858H21.0277V11.5798C21.0277 12.3318 21.7107 12.5508 22.2717 12.1948L25.6757 10.0078C26.2087 9.6658 26.2087 9.0238 25.6617 8.6678L22.2717 6.4938C21.7107 6.1248 21.0277 6.3438 21.0277 7.0958V8.4898H17.7867C16.5427 8.4898 15.9547 8.1758 15.1347 7.1098L11.2927 2.1058C10.2267 0.7108 9.0237 0.1778 7.1227 0.1778H3.6227C3.1587 0.1778 2.7757 0.5608 2.7757 1.0118C2.7757 1.4768 3.1587 1.8598 3.6227 1.8598H7.1227C8.5857 1.8598 9.2427 2.1598 9.9807 3.1308L13.7817 8.1618C14.8747 9.5838 16.0237 10.1858 17.7867 10.1858ZM10.4867 19.7418C8.9277 19.7418 7.7107 18.5258 7.7107 16.9668C7.7107 15.4078 8.9277 14.1918 10.4867 14.1918C12.0447 14.1918 13.2617 15.4078 13.2617 16.9668C13.2617 18.5258 12.0447 19.7418 10.4867 19.7418ZM37.6387 19.7418C36.0797 19.7418 34.8767 18.5258 34.8767 16.9668C34.8767 15.4078 36.0797 14.1918 37.6387 14.1918C39.1977 14.1918 40.4137 15.4078 40.4137 16.9668C40.4137 18.5258 39.1977 19.7418 37.6387 19.7418Z"
            fill={color}
          />
        </svg>
      )
    case "medium":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 49.19140625 22.708984375"
          className={className}
        >
          <path
            d="              M11.1567 22.7094C13.2617 22.7094 15.0257 21.4374 15.7227 19.5914H34.0977C34.8087 21.4374 36.5727 22.7094 38.6777 22.7094C40.7967 22.7094 42.5607 21.4374 43.2577 19.5914H45.5407C48.0017 19.5914 49.1917 18.2654 49.1917 15.5174V9.5564C49.1917 7.8204 48.5347 5.7964 47.4417 4.1974L46.8267 3.2954C45.2127 0.9434 43.2167 0.0004 39.9497 0.0004H29.1077C23.4197 0.0004 21.1227 0.5604 17.7327 2.6794L15.6267 4.0054L17.2537 6.1254L19.1407 4.9494C22.1347 3.0764 23.8707 2.6524 29.1077 2.6524H39.9497C42.2737 2.6524 43.5587 3.2534 44.6387 4.8264L45.2537 5.7144C46.0607 6.8774 46.5387 8.3124 46.5387 9.5564V15.4354C46.5387 16.4614 46.1287 16.9394 45.2127 16.9394H43.5037C43.0937 14.6284 41.1117 12.9064 38.6777 12.9064C36.2437 12.9064 34.2617 14.6284 33.8517 16.9394H15.9687C15.5727 14.6284 13.5897 12.9064 11.1567 12.9064C8.7087 12.9064 6.7407 14.6284 6.3297 16.9394H3.9787C3.1587 16.9394 2.6527 16.3654 2.6527 15.4084V13.4394C2.6527 11.1014 4.1837 9.7894 7.5197 9.3784L12.1817 8.8044L10.3227 6.3574L7.1917 6.7404C2.4067 7.3284 -0.0003 9.5564 -0.0003 13.4394V15.7774C-0.0003 18.1834 1.4087 19.5914 3.7187 19.5914H6.5767C7.2737 21.4374 9.0367 22.7094 11.1567 22.7094ZM18.6487 10.8964H21.8207V12.0454C21.8207 13.0294 22.6817 13.3304 23.4197 12.8514L26.8657 10.6364C27.5487 10.1994 27.5627 9.3514 26.8657 8.9004L23.4337 6.6994C22.6817 6.2074 21.8207 6.4944 21.8207 7.5054V8.6274H18.6487C17.3637 8.6274 16.8437 8.3534 15.9957 7.2594L12.3187 2.4474C11.1427 0.9024 9.7757 0.3004 7.6697 0.3004H4.3337C3.7047 0.3004 3.1997 0.8204 3.1997 1.4354C3.1997 2.0644 3.7047 2.5704 4.3337 2.5704H7.6697C9.1877 2.5704 9.7617 2.8304 10.5277 3.8414L14.1777 8.6544C15.3807 10.2264 16.7067 10.8964 18.6487 10.8964ZM11.1567 20.1524C9.8437 20.1524 8.8317 19.1404 8.8317 17.8284C8.8317 16.5154 9.8437 15.5034 11.1567 15.5034C12.4547 15.5034 13.4807 16.5154 13.4807 17.8284C13.4807 19.1404 12.4547 20.1524 11.1567 20.1524ZM38.6777 20.1524C37.3787 20.1524 36.3537 19.1404 36.3537 17.8284C36.3537 16.5154 37.3787 15.5034 38.6777 15.5034C39.9907 15.5034 41.0017 16.5154 41.0017 17.8284C41.0017 19.1404 39.9907 20.1524 38.6777 20.1524Z"
            fill={color}
          />
        </svg>
      )
    case "regular":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 48.494140625 22.216796875"
          className={className}
        >
          <path
            d="              M10.8687 22.2163C12.9477 22.2163 14.6697 20.9313 15.2987 19.0993H33.9337C34.5627 20.9313 36.2717 22.2163 38.3497 22.2163C40.4277 22.2163 42.1507 20.9313 42.7797 19.0993H45.0217C47.4137 19.0993 48.4937 17.8693 48.4937 15.1623V9.3243C48.4937 7.6153 47.8517 5.6603 46.7847 4.1013L46.1697 3.1993C44.5977 0.9163 42.6697 0.0003 39.4977 0.0003H28.8207C23.1877 0.0003 20.9317 0.5473 17.5817 2.6383L15.3947 4.0193L16.7347 5.7833L18.7577 4.5253C21.7797 2.6383 23.5707 2.2013 28.8207 2.2013H39.4977C41.8637 2.2013 43.2437 2.8433 44.3517 4.4573L44.9667 5.3453C45.8007 6.5483 46.2927 8.0253 46.2927 9.3243V15.2983C46.2927 16.3923 45.8687 16.8983 44.8987 16.8983H42.9847C42.6837 14.5883 40.7557 12.8653 38.3497 12.8653C35.9437 12.8653 34.0297 14.5883 33.7147 16.8983H15.5037C15.2027 14.5883 13.2757 12.8653 10.8687 12.8653C8.4627 12.8653 6.5347 14.5883 6.2347 16.8983H3.6097C2.7207 16.8983 2.2017 16.2973 2.2017 15.2573V13.1793C2.2017 10.7323 3.8417 9.3383 7.2597 8.9143L11.8947 8.3403L10.3497 6.3163L6.9727 6.7263C2.3107 7.3003 -0.0003 9.4333 -0.0003 13.1793V15.5313C-0.0003 17.7593 1.3127 19.0993 3.4867 19.0993H6.4527C7.0817 20.9313 8.7907 22.2163 10.8687 22.2163ZM18.3337 10.6093H21.5197V11.7853C21.5197 12.7423 22.3677 13.0293 23.0777 12.5643L26.5097 10.3493C27.1797 9.9253 27.1937 9.1053 26.5097 8.6683L23.0917 6.4663C22.3677 5.9883 21.5197 6.2753 21.5197 7.2463V8.4083H18.3337C17.0487 8.4083 16.5297 8.1213 15.6817 7.0273L11.9767 2.2013C10.8277 0.6833 9.4747 0.0823 7.3967 0.0823H4.0337C3.4317 0.0823 2.9397 0.5743 2.9397 1.1753C2.9397 1.7773 3.4317 2.2833 4.0337 2.2833H7.3967C8.9137 2.2833 9.4887 2.5433 10.2537 3.5413L13.9317 8.3943C15.1077 9.9393 16.4197 10.6093 18.3337 10.6093ZM10.8687 20.0153C9.4747 20.0153 8.3947 18.9353 8.3947 17.5413C8.3947 16.1463 9.4747 15.0663 10.8687 15.0663C12.2637 15.0663 13.3437 16.1463 13.3437 17.5413C13.3437 18.9353 12.2637 20.0153 10.8687 20.0153ZM38.3497 20.0153C36.9547 20.0153 35.8747 18.9353 35.8747 17.5413C35.8747 16.1463 36.9547 15.0663 38.3497 15.0663C39.7437 15.0663 40.8247 16.1463 40.8247 17.5413C40.8247 18.9353 39.7437 20.0153 38.3497 20.0153Z"
            fill={color}
          />
        </svg>
      )
    case "semibold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 49.73828125 23.091796875"
          className={className}
        >
          <path
            d="              M11.3617 23.0918C13.5077 23.0918 15.2987 21.8068 16.0647 19.9608H34.2347C34.9867 21.8068 36.7907 23.0918 38.9377 23.0918C41.0707 23.0918 42.8747 21.8068 43.6267 19.9608H45.9377C48.4527 19.9608 49.7387 18.5528 49.7387 15.8048V9.7478C49.7387 7.9568 49.0547 5.9058 47.9477 4.2788L47.3317 3.3768C45.6777 0.9708 43.6407 -0.0002 40.3047 -0.0002H29.3267C23.5977 -0.0002 21.2597 0.5608 17.8277 2.7068L15.8047 3.9788L17.6507 6.3848L19.4277 5.2778C22.4087 3.4178 24.1037 2.9938 29.3267 2.9938H40.3047C42.5877 2.9938 43.7907 3.5688 44.8437 5.0998L45.4727 5.9878C46.2657 7.1368 46.7307 8.5178 46.7307 9.7478V15.5308C46.7307 16.5018 46.3337 16.9528 45.4587 16.9528H43.8867C43.4087 14.6428 41.3987 12.9338 38.9377 12.9338C36.4767 12.9338 34.4527 14.6428 33.9747 16.9528H16.3247C15.8457 14.6428 13.8227 12.9338 11.3617 12.9338C8.9007 12.9338 6.8907 14.6428 6.3987 16.9528H4.2797C3.4867 16.9528 3.0077 16.4198 3.0077 15.5178V13.6168C3.0077 11.3618 4.4437 10.1308 7.7247 9.7348L12.4137 9.1598L10.3087 6.3848L7.3557 6.7538C2.4747 7.3418 -0.0003 9.6388 -0.0003 13.6168V15.9688C-0.0003 18.4978 1.4907 19.9608 3.9097 19.9608H6.6717C7.4237 21.8068 9.2287 23.0918 11.3617 23.0918ZM18.8947 11.1148H22.0527V12.2368C22.0527 13.2478 22.9417 13.5488 23.6937 13.0708L27.1387 10.8418C27.8357 10.4038 27.8497 9.5288 27.1387 9.0648L23.7067 6.8628C22.9417 6.3578 22.0527 6.6578 22.0527 7.6968V8.7908H18.8947C17.5957 8.7908 17.0897 8.5178 16.2427 7.4238L12.5647 2.6248C11.3887 1.0798 9.9937 0.4648 7.8747 0.4648H4.5527C3.9097 0.4648 3.3907 0.9848 3.3907 1.6268C3.3907 2.2698 3.9097 2.7888 4.5527 2.7888H7.8747C9.4067 2.7888 9.9667 3.0488 10.7457 4.0608L14.3687 8.8458C15.5857 10.4458 16.9257 11.1148 18.8947 11.1148ZM11.3617 20.2478C10.1307 20.2478 9.1597 19.2778 9.1597 18.0328C9.1597 16.7888 10.1307 15.8318 11.3617 15.8318C12.6057 15.8318 13.5767 16.7888 13.5767 18.0328C13.5767 19.2778 12.6057 20.2478 11.3617 20.2478ZM38.9377 20.2478C37.6937 20.2478 36.7227 19.2778 36.7227 18.0328C36.7227 16.7888 37.6937 15.8318 38.9377 15.8318C40.1677 15.8318 41.1387 16.7888 41.1387 18.0328C41.1387 19.2778 40.1677 20.2478 38.9377 20.2478Z"
            fill={color}
          />
        </svg>
      )
    case "thin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 45.869140625 20.3984375"
          className={className}
        >
          <path
            d="              M9.9807 20.398C11.9087 20.398 13.5077 19.154 13.9997 17.391H32.6757C33.1817 19.154 34.7677 20.398 36.7087 20.398C38.6367 20.398 40.2367 19.154 40.7287 17.391H43.0667C44.9397 17.391 45.8687 16.406 45.8687 14.533V8.463C45.8687 6.85 45.3357 5.223 44.3247 3.732L43.7227 2.857C42.3967 0.916 40.4687 0 37.7207 0H27.3707C21.9707 0 19.9337 0.492 16.7757 2.475L13.6997 4.402L14.3147 5.223L17.3087 3.336C20.3167 1.449 22.1207 1.025 27.3707 1.025H37.7207C40.1677 1.025 41.7537 1.75 42.8887 3.418L43.4907 4.307C44.3927 5.674 44.8577 7.014 44.8577 8.463V14.561C44.8577 15.764 44.2837 16.379 43.0387 16.379H40.8787C40.8787 16.324 40.8927 16.27 40.8927 16.229C40.8927 13.877 39.0467 12.045 36.7087 12.045C34.3577 12.045 32.5257 13.877 32.5257 16.229C32.5257 16.27 32.5257 16.324 32.5257 16.379H14.1507C14.1637 16.324 14.1637 16.27 14.1637 16.229C14.1637 13.877 12.3187 12.045 9.9807 12.045C7.6287 12.045 5.7967 13.877 5.7967 16.229C5.7967 16.27 5.7967 16.324 5.7967 16.379H2.8437C1.6407 16.379 1.0117 15.723 1.0117 14.438V12.223C1.0117 9.461 2.6387 7.984 6.3847 7.533L11.4027 6.918L10.6917 5.961L6.2617 6.521C2.0647 7.041 -0.0003 8.941 -0.0003 12.223V14.492C-0.0003 16.393 0.9707 17.391 2.8167 17.391H5.9607C6.4527 19.154 8.0387 20.398 9.9807 20.398ZM17.0487 9.652H20.3847V11.348C20.3847 11.813 20.8357 11.949 21.2047 11.717L24.5547 9.57C24.9097 9.338 24.9237 8.928 24.5407 8.695L21.2047 6.549C20.8357 6.303 20.3847 6.453 20.3847 6.918V8.641H17.0487C15.8727 8.641 15.1897 8.258 14.3967 7.232L10.3767 1.996C9.4477 0.779 8.4357 0.314 6.7537 0.314H3.0767C2.7887 0.314 2.5567 0.533 2.5567 0.82C2.5567 1.094 2.7887 1.326 3.0767 1.326H6.7537C8.1487 1.326 8.9007 1.668 9.6117 2.611L13.5897 7.875C14.5607 9.133 15.5177 9.652 17.0487 9.652ZM9.9807 19.387C8.2027 19.387 6.8087 18.006 6.8087 16.229C6.8087 14.438 8.2027 13.057 9.9807 13.057C11.7577 13.057 13.1387 14.438 13.1387 16.229C13.1387 18.006 11.7577 19.387 9.9807 19.387ZM36.7087 19.387C34.9177 19.387 33.5367 18.006 33.5367 16.229C33.5367 14.438 34.9177 13.057 36.7087 13.057C38.4867 13.057 39.8677 14.438 39.8677 16.229C39.8677 18.006 38.4867 19.387 36.7087 19.387Z"
            fill={color}
          />
        </svg>
      )
    case "ultralight":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 45.103515625 19.865234375"
          className={className}
        >
          <path
            d="              M9.7207 19.8655C11.6077 19.8655 13.1657 18.6215 13.6177 16.8845H32.3207C32.7717 18.6215 34.3297 19.8655 36.2167 19.8655C38.1177 19.8655 39.6757 18.6215 40.1267 16.8845H42.4927C44.2147 16.8845 45.1037 15.9685 45.1037 14.3415V8.2165C45.1037 6.6035 44.5977 5.0855 43.5997 3.6095L43.0117 2.7475C41.7537 0.9025 39.8267 -0.0005 37.2017 -0.0005H26.9477C21.6157 -0.0005 19.6467 0.4645 16.5427 2.4195L13.2067 4.5115L13.6037 5.0445L16.8987 2.9805C19.8927 1.1075 21.6977 0.6695 26.9477 0.6695H37.2017C39.6757 0.6695 41.3167 1.4215 42.4517 3.1175L43.0527 4.0055C43.9827 5.4005 44.4337 6.7125 44.4337 8.2165V14.3415C44.4337 15.5585 43.8187 16.2145 42.5057 16.2145H40.2367C40.2497 16.0915 40.2637 15.9555 40.2637 15.8315C40.2637 13.5625 38.4867 11.7855 36.2167 11.7855C33.9607 11.7855 32.1837 13.5625 32.1837 15.8315C32.1837 15.9555 32.1977 16.0785 32.2107 16.2145H13.7407C13.7537 16.0915 13.7537 15.9555 13.7537 15.8315C13.7537 13.5625 11.9767 11.7855 9.7207 11.7855C7.4517 11.7855 5.6737 13.5625 5.6737 15.8315C5.6737 15.9555 5.6877 16.0785 5.7017 16.2145H2.6117C1.3127 16.2145 0.6697 15.5445 0.6697 14.1775V11.9215C0.6697 9.0785 2.2967 7.5875 6.1387 7.1225L11.2657 6.4805L10.7867 5.8515L6.0567 6.4535C1.9957 6.9455 -0.0003 8.7775 -0.0003 11.9215V14.1775C-0.0003 15.9825 0.8617 16.8845 2.6247 16.8845H5.8107C6.2617 18.6215 7.8207 19.8655 9.7207 19.8655ZM16.6657 9.3655H20.0567V11.2105C20.0567 11.5255 20.3987 11.6215 20.6587 11.4565L23.9807 9.3245C24.2537 9.1605 24.2537 8.8725 23.9667 8.6815L20.6587 6.5625C20.3987 6.3845 20.0567 6.4945 20.0567 6.8085V8.6955H16.6657C15.5177 8.6955 14.8067 8.2855 14.0137 7.2735L9.9117 1.9275C9.0367 0.7925 8.1207 0.3695 6.5627 0.3695H2.7887C2.5977 0.3695 2.4477 0.5195 2.4477 0.6975C2.4477 0.8885 2.5977 1.0395 2.7887 1.0395H6.5627C7.9157 1.0395 8.7227 1.4085 9.4197 2.3245L13.4937 7.7105C14.3967 8.8865 15.2437 9.3655 16.6657 9.3655ZM9.7207 19.1955C7.8207 19.1955 6.3437 17.7185 6.3437 15.8315C6.3437 13.9315 7.8207 12.4555 9.7207 12.4555C11.6077 12.4555 13.0837 13.9315 13.0837 15.8315C13.0837 17.7185 11.6077 19.1955 9.7207 19.1955ZM36.2167 19.1955C34.3297 19.1955 32.8537 17.7185 32.8537 15.8315C32.8537 13.9315 34.3297 12.4555 36.2167 12.4555C38.1177 12.4555 39.5937 13.9315 39.5937 15.8315C39.5937 17.7185 38.1177 19.1955 36.2167 19.1955Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}
