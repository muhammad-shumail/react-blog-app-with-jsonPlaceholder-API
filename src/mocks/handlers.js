import { rest } from 'msw';

export const handlers = [
  rest.get('https://jsonplaceholder.typicode.com/users', async (req, res, ctx) => res(
    ctx.json([
      {
        id: 1,
        name: 'Leanne Graham',
        username: 'Bret',
        email: 'Sincere@april.biz',
        address: {
          street: 'Kulas Light',
          suite: 'Apt. 556',
          city: 'Gwenborough',
          zipcode: '92998-3874',
          geo: {
            lat: '-37.3159',
            lng: '81.1496',
          },
        },
        phone: '1-770-736-8031 x56442',
        website: 'hildegard.org',
        company: {
          name: 'Romaguera-Crona',
          catchPhrase: 'Multi-layered client-server neural-net',
          bs: 'harness real-time e-markets',
        },
      },
      {
        id: 2,
        name: 'Ervin Howell',
        username: 'Antonette',
        email: 'Shanna@melissa.tv',
        address: {
          street: 'Victor Plains',
          suite: 'Suite 879',
          city: 'Wisokyburgh',
          zipcode: '90566-7771',
          geo: {
            lat: '-43.9509',
            lng: '-34.4618',
          },
        },
        phone: '010-692-6593 x09125',
        website: 'anastasia.net',
        company: {
          name: 'Deckow-Crist',
          catchPhrase: 'Proactive didactic contingency',
          bs: 'synergize scalable supply-chains',
        },
      },
      {
        id: 3,
        name: 'Clementine Bauch',
        username: 'Samantha',
        email: 'Nathan@yesenia.net',
        address: {
          street: 'Douglas Extension',
          suite: 'Suite 847',
          city: 'McKenziehaven',
          zipcode: '59590-4157',
          geo: {
            lat: '-68.6102',
            lng: '-47.0653',
          },
        },
        phone: '1-463-123-4447',
        website: 'ramiro.info',
        company: {
          name: 'Romaguera-Jacobson',
          catchPhrase: 'Face to face bifurcated interface',
          bs: 'e-enable strategic applications',
        },
      },
    ]),
  )),
  rest.get('https://jsonplaceholder.typicode.com/posts', async (req, res, ctx) => res(
    ctx.json([
      {
        userId: 1,
        id: 1,
        title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
        body: 'quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto',
      },
      {
        userId: 1,
        id: 2,
        title: 'qui est esse',
        body: 'est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis qui aperiam non debitis possimus qui neque nisi nulla',
      },
      {
        userId: 2,
        id: 13,
        title: 'dolorum ut in voluptas mollitia et saepe quo animi',
        body: 'aut dicta possimus sint mollitia voluptas commodi quo doloremque iste corrupti reiciendis voluptatem eius rerum sit cumque quod eligendi laborum minima perferendis recusandae assumenda consectetur porro architecto ipsum ipsam',
      },
      {
        userId: 2,
        id: 14,
        title: 'voluptatem eligendi optio',
        body: 'fuga et accusamus dolorum perferendis illo voluptas non doloremque neque facere ad qui dolorum molestiae beatae sed aut voluptas totam sit illum',
      },
      {
        userId: 3,
        id: 29,
        title: 'iusto eius quod necessitatibus culpa ea',
        body: 'odit magnam ut saepe sed non qui tempora atque nihil accusamus illum doloribus illo dolor eligendi repudiandae odit magni similique sed cum maiores',
      },
      {
        userId: 3,
        id: 30,
        title: 'a quo magni similique perferendis',
        body: 'alias dolor cumque impedit blanditiis non eveniet odio maxime blanditiis amet eius quis tempora quia autem rem a provident perspiciatis quia',
      },
    ]),
  )),
  rest.get('https://jsonplaceholder.typicode.com/comments', async (req, res, ctx) => res(
    ctx.json([
      {
        postId: 1,
        id: 4,
        name: 'alias odio sit',
        email: 'Lew@alysha.tv',
        body: 'non et atque occaecati deserunt quas accusantium unde odit nobis qui voluptatem quia voluptas consequuntur itaque dolor et qui rerum deleniti ut occaecati',
      },
      {
        postId: 1,
        id: 5,
        name: 'vero eaque aliquid doloribus et culpa',
        email: 'Hayden@althea.biz',
        body: 'harum non quasi et ratione tempore iure ex voluptates in ratione harum architecto fugit inventore cupiditate voluptates magni quo et',
      },
      {
        postId: 2,
        id: 6,
        name: 'et fugit eligendi deleniti quidem qui sint nihil autem',
        email: 'Presley.Mueller@myrl.com',
        body: 'doloribus at sed quis culpa deserunt consectetur qui praesentium accusamus fugiat dicta voluptatem rerum ut voluptate autem voluptatem repellendus aspernatur dolorem in',
      },
      {
        postId: 2,
        id: 7,
        name: 'repellat consequatur praesentium vel minus molestias voluptatum',
        email: 'Dallas@ole.me',
        body: 'maiores sed dolores similique labore et inventore et quasi temporibus esse sunt id et eos voluptatem aliquam aliquid ratione corporis molestiae mollitia quia et magnam dolor',
      },
      {
        postId: 2,
        id: 8,
        name: 'et omnis dolorem',
        email: 'Mallory_Kunze@marie.org',
        body: 'ut voluptatem corrupti velit ad voluptatem maiores et nisi velit vero accusamus maiores voluptates quia aliquid ullam eaque',
      },
      {
        postId: 2,
        id: 9,
        name: 'provident id voluptas',
        email: 'Meghan_Littel@rene.us',
        body: 'sapiente assumenda molestiae atque adipisci laborum distinctio aperiam et ab ut omnis et occaecati aspernatur odit sit rem expedita quas enim ipsam minus',
      },
      {
        postId: 2,
        id: 10,
        name: 'eaque et deleniti atque tenetur ut quo ut',
        email: 'Carmen_Keeling@caroline.name',
        body: 'voluptate iusto quis nobis reprehenderit ipsum amet nulla quia quas dolores velit et non aut quia necessitatibus nostrum quaerat nulla et accusamus nisi facilis',
      },
      {
        postId: 3,
        id: 11,
        name: 'fugit labore quia mollitia quas deserunt nostrum sunt',
        email: 'Veronica_Goodwin@timmothy.net',
        body: 'ut dolorum nostrum id quia aut est fuga est inventore vel eligendi explicabo quis consectetur aut occaecati repellat id natus quo est ut blanditiis quia ut vel ut maiores ea',
      },
      {
        postId: 3,
        id: 12,
        name: 'modi ut eos dolores illum nam dolor',
        email: 'Oswald.Vandervort@leanne.org',
        body: 'expedita maiores dignissimos facilis ipsum est rem est fugit velit sequi eum odio dolores dolor totam occaecati ratione eius rem velit',
      },
      {
        postId: 3,
        id: 13,
        name: 'aut inventore non pariatur sit vitae voluptatem sapiente',
        email: 'Kariane@jadyn.tv',
        body: 'fuga eos qui dolor rerum inventore corporis exercitationem corporis cupiditate et deserunt recusandae est sed quis culpa eum maiores corporis et',
      },
      {
        postId: 3,
        id: 14,
        name: 'et officiis id praesentium hic aut ipsa dolorem repudiandae',
        email: 'Nathan@solon.io',
        body: 'vel quae voluptas qui exercitationem voluptatibus unde sed minima et qui ipsam aspernatur expedita magnam laudantium et et quaerat ut qui dolorum',
      },
      {
        postId: 3,
        id: 15,
        name: 'debitis magnam hic odit aut ullam nostrum tenetur',
        email: 'Maynard.Hodkiewicz@roberta.com',
        body: 'nihil ut voluptates blanditiis autem odio dicta rerum quisquam saepe et est sunt quasi nemo laudantium deserunt molestias tempora quo quia',
      },
      {
        postId: 4,
        id: 16,
        name: 'perferendis temporibus delectus optio ea eum ratione dolorum',
        email: 'Christine@ayana.info',
        body: 'iste ut laborum aliquid velit facere itaque quo ut soluta dicta voluptate error tempore aut et sequi reiciendis dignissimos expedita consequuntur libero sed fugiat facilis',
      },
      {
        postId: 4,
        id: 17,
        name: 'eos est animi quis',
        email: 'Preston_Hudson@blaise.tv',
        body: 'consequatur necessitatibus totam sed sit dolorum recusandae quae odio excepturi voluptatum harum voluptas quisquam sit ad eveniet delectus doloribus odio qui non labore',
      },
      {
        postId: 4,
        id: 18,
        name: 'aut et tenetur ducimus illum aut nulla ab',
        email: 'Vincenza_Klocko@albertha.name',
        body: 'veritatis voluptates necessitatibus maiores corrupti neque et exercitationem amet sit et ullam velit sit magnam laborum magni ut molestias',
      },
    ]),
  )),
  rest.put('https://jsonplaceholder.typicode.com/comments/1', (req, res, ctx) => res(
    ctx.json({
      id: 1,
      name: 'mustafa dabah',
      body: 'I hope you like this project because i am really tired in it ...',
      postId: 1,
    }),
  )),
  rest.delete('https://jsonplaceholder.typicode.com/comments/1', (req, res, ctx) => res(
    ctx.json([
      {
        postId: 1,
        id: 4,
        name: 'alias odio sit',
        email: 'Lew@alysha.tv',
        body: 'non et atque occaecati deserunt quas accusantium unde odit nobis qui voluptatem quia voluptas consequuntur itaque dolor et qui rerum deleniti ut occaecati',
      },
      {
        postId: 1,
        id: 5,
        name: 'vero eaque aliquid doloribus et culpa',
        email: 'Hayden@althea.biz',
        body: 'harum non quasi et ratione tempore iure ex voluptates in ratione harum architecto fugit inventore cupiditate voluptates magni quo et',
      },
      {
        postId: 2,
        id: 6,
        name: 'et fugit eligendi deleniti quidem qui sint nihil autem',
        email: 'Presley.Mueller@myrl.com',
        body: 'doloribus at sed quis culpa deserunt consectetur qui praesentium accusamus fugiat dicta voluptatem rerum ut voluptate autem voluptatem repellendus aspernatur dolorem in',
      },
    ]),
  )),
];