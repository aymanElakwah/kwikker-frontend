// import { Injectable } from '@angular/core';

// /**
//  * mocking backend server
//  */
// @Injectable({
//   providedIn: 'root'
// })
// export class InMemoryDataService {
//   /**
//    * no dependcy injection needed
//    */
//   constructor() { }
//   createDb() {

//     const ARR = [{
//       id: 'adasdas',
//       created_at: new Date(),
//       type: 'LIKE',
//       usernmae: 'ahmedasd',
//       screen_name: 'olaa',
//       kweek_id: 'asdasdasd',
//       kweek_text: 'sjahdasd ashduis dihsd iushds dishduish dshd sdshdd',
//       profie_pic_URL: 'https://www.w3schools.com/images/w3schools_green.jpg',
//     },
//     {
//       id: 'adasdsdas',
//       created_at: new Date(),
//       type: 'REKWEEK',
//       usernmae: 'ahmedasd',
//       screen_name: 'jimmy',
//       kweek_id: 'asdasdasd',
//       kweek_text: 'fffffffffff f f f fffffffff fff f f fffffffsdffffdfff  ',
//       profie_pic_URL: 'https://www.w3schools.com/images/w3schools_green.jpg',
//     },
//     {
//       id: 'adasdsdas',
//       created_at: new Date(),
//       type: 'FOLLOW',
//       usernmae: 'ahmedasd',
//       screen_name: 'jimmy',
//       kweek_id: 'asdasdasd',
//       kweek_text: 'fffffffffff f f f fffffffff fff f f fffffffffff  ',
//       profie_pic_URL: 'https://www.w3schools.com/images/w3schools_green.jpg',
//     },
//     {
//       id: 'adasdsdas',
//       created_at: new Date(),
//       type: 'REKWEEK',
//       usernmae: 'ahmedasd',
//       screen_name: 'jimmy',
//       kweek_id: 'asdasdasd',
//       kweek_text: 'fffffffffff f f f ffffffsdsdfff fff f f sdsffffflsdlksjdlksjdklsjdlkddfdfddddddddggggdfdfdfdfdffffff  ',
//       profie_pic_URL: 'https://www.w3schools.com/images/w3schools_green.jpg',
//     },
//     {
//       id: 'adasdsdas',
//       created_at: new Date(),
//       type: 'REKWEEK',
//       usernmae: 'ahmedasd',
//       screen_name: 'jimmy',
//       kweek_id: 'asdasdasd',
//       kweek_text: 'fffffffffff f f f fffffffff fff f f fffffffffff  ',
//       profie_pic_URL: 'https://www.w3schools.com/images/w3schools_green.jpg',
//     },
//     {
//       id: 'adasdsdas',
//       created_at: new Date(),
//       type: 'REKWEEK',
//       usernmae: 'ahmedasd',
//       screen_name: 'jimmy',
//       kweek_id: 'asdasdasd',
//       kweek_text: '11111111111111111111111333333344444444444',
//       profie_pic_URL: 'https://www.w3schools.com/images/w3schools_green.jpg',
//     }];

//     /*const profileUserTest = {
//       userName: 'Ahmed Mahmoud',
//       screenName: 'Ahmed_Mahmoud14',
//       Bio: 'Play the best of EA for $4.99 a month! an evolving collection of EA games for Xbox One!',
//       birthDate: Date.now(),
//       joinedDate: Date.now(),
//       profilePicUrl: 'https://www.gstatic.com/webp/gallery/1.jpg',
//       bannerUrl: 'https://www.gstatic.com/webp/gallery/1.jpg',
//       following: false,
//       followsYou: true,
//       followersCount: 2000,
//       followingCount: 248,
//       kweeksCount: 244,
//       likesCount: 155,
//       blocked: false,
//       muted: false
//     };

//     const trendsTest = [
//       {
//         Id: 1,
//         Text: '#Detective_Conan',
//         NumberOfKweeks: 458
//       },
//       {
//         Id: 2,
//         Text: '#Cairo',
//         NumberOfKweeks: 458
//       },
//       {
//         Id: 3,
//         Text: '#Egypt',
//         NumberOfKweeks: 458
//       },
//       {
//         Id: 4,
//         Text: 'تحيا_مصر',
//         NumberOfKweeks: 742
//       },
//       {
//         Id: 5,
//         Text: 'الأهلى_بطل_مصر',
//         NumberOfKweeks: 754
//       },
//       {
//         Id: 16,
//         Text: '#Fasting',
//         NumberOfKweeks: 155
//       },
//       {
//         Id: 7,
//         Text: 'New Zeland',
//         NumberOfKweeks: 999
//       },
//       {
//         Id: 8,
//         Text: '#ALZamalek',
//         NumberOfKweeks: 305
//       },
//       {
//         Id: 9,
//         Text: '#Ralph_breaks_the_Internet',
//         NumberOfKweeks: 2000
//       },
//       {
//         Id: 10,
//         Text: '#Avengers',
//         NumberOfKweeks: 458
//       } ];*/

//      const Message = [
//        {
//           user: {
//             username: 'filonabil333',
//             screen_name: 'filo nabil',
//             profile_image_url: 'string',
//             following: true,
//             follows_you: true,
//             blocked: true,
//             muted: true
//           },
//           last_message: {
//             created_at: '2019-03-14T20:40:36.456Z',
//             text: 'first message in this site',
//             media_url: 'string'
//           }
//         }
//      ];

//     const KWK = [ {
//           'id': '1',
//           'created_at': '2011-04-11T10:20:30Z',
//           'text': 'hello world #abdulrahman_khalid abdulrahman @abdulrahman',
//           'media_url': 'https://media.idownloadblog.com/wp-content/uploads/2017/03/Twitter-new-2017-avatar-001.png',
//           'user': {
//             'username': 'ayy_abdulrahman',
//             'screen_name': 'Abdulrahman Khalid',
//             'profile_image_url': 'https://pbs.twimg.com/profile_images/1030601937115381760/tYVfVdN__400x400.jpg',
//             'following': true,
//             'follows_you': true,
//             'blocked': false,
//             'muted': false
//           },
//           'mentions': [
//             {
//               'username': '@abdulrahman',
//               'indices': [
//                 44, 56
//               ]
//             }
//           ],
//           'hashtags': [
//             {
//               'id': '#abdulrahman_khalid',
//               'indices': [
//                 12, 31
//               ]
//             }
//           ],
//           'number_of_likes': 1,
//           'number_of_rekweeks': 2,
//           'number_of_replies': 3,
//           'reply_to': 'string',
//           'rekweek_info': {
//             'rekweeker_name': 'string',
//             'rekweeker_username': 'string'
//           },
//           'liked_by_user': true,
//           'rekweeked_by_user': true
//         },
//         {
//           'id': '2',
//           'created_at': '2011-04-11T10:20:30Z',
//           'text': '@a @b #c d d #e @f abdulrahman',
//           'media_url': '',
//           'user': {
//             'username': 'ayy_abdulrahman',
//             'screen_name': 'Abdulrahman Khalid',
//             'profile_image_url': 'https://pbs.twimg.com/profile_images/1030601937115381760/tYVfVdN__400x400.jpg',
//             'following': true,
//             'follows_you': true,
//             'blocked': false,
//             'muted': false
//           },
//           'mentions': [
//             {
//               'username': 'string',
//               'indices': [
//                 0, 2
//               ]
//             },
//             {
//               'username': 'string',
//               'indices': [
//                 3, 5
//               ]
//             },
//             {
//               'username': 'string',
//               'indices': [
//                 16, 18
//               ]
//             }
//           ],
//           'hashtags': [
//             {
//               'id': 'string',
//               'indices': [
//                 6, 8
//               ]
//             },
//             {
//               'id': 'string',
//               'indices': [
//                 13, 15
//               ]
//             }
//           ],
//           'number_of_likes': 2,
//           'number_of_rekweeks': 0,
//           'number_of_replies': 0,
//           'reply_to': 'string',
//           'rekweek_info': {
//             'rekweeker_name': 'string',
//             'rekweeker_username': 'string'
//           },
//           'liked_by_user': false,
//           'rekweeked_by_user': false
//         },
//         {
//           'id': '3',
//           'created_at': '2011-04-11T10:20:30Z',
//           'text': 'hello world',
//           'media_url': 'https://media.idownloadblog.com/wp-content/uploads/2017/03/Twitter-new-2017-avatar-001.png',
//           'user': {
//             'username': 'ayy_abdulrahman',
//             'screen_name': 'Abdulrahman Khalid',
//             'profile_image_url': 'https://pbs.twimg.com/profile_images/1030601937115381760/tYVfVdN__400x400.jpg',
//             'following': true,
//             'follows_you': true,
//             'blocked': false,
//             'muted': false
//           },
//           'mentions': [
//           ],
//           'hashtags': [
//           ],
//           'number_of_likes': 1,
//           'number_of_rekweeks': 2,
//           'number_of_replies': 3,
//           'reply_to': 'string',
//           'rekweek_info': {
//             'rekweeker_name': 'string',
//             'rekweeker_username': 'string'
//           },
//           'liked_by_user': true,
//           'rekweeked_by_user': true
//         },
//         {
//           'id': '3',
//           'created_at': '2011-04-11T10:20:30Z',
//           'text': 'hello world',
//           'media_url': 'https://media.idownloadblog.com/wp-content/uploads/2017/03/Twitter-new-2017-avatar-001.png',
//           'user': {
//             'username': 'ayy_abdulrahman',
//             'screen_name': 'Abdulrahman Khalid',
//             'profile_image_url': 'https://pbs.twimg.com/profile_images/1030601937115381760/tYVfVdN__400x400.jpg',
//             'following': true,
//             'follows_you': true,
//             'blocked': false,
//             'muted': false
//           },
//           'mentions': [
//           ],
//           'hashtags': [
//           ],
//           'number_of_likes': 1,
//           'number_of_rekweeks': 2,
//           'number_of_replies': 3,
//           'reply_to': 'string',
//           'rekweek_info': {
//             'rekweeker_name': 'string',
//             'rekweeker_username': 'string'
//           },
//           'liked_by_user': true,
//           'rekweeked_by_user': true
//         },
//     ];

//     const REPLY1 = [ {
//       'id': '4',
//       'created_at': '2011-04-11T10:20:30Z',
//       'text': 'hello world #abdulrahman_khalid abdulrahman @abdulrahman',
//       'media_url': 'https://media.idownloadblog.com/wp-content/uploads/2017/03/Twitter-new-2017-avatar-001.png',
//       'user': {
//         'username': 'ayy_yousif',
//         'screen_name': 'Yousif Khalid',
//         'profile_image_url': 'https://pbs.twimg.com/profile_images/1030601937115381760/tYVfVdN__400x400.jpg',
//         'following': true,
//         'follows_you': true,
//         'blocked': false,
//         'muted': false
//       },
//       'mentions': [
//         {
//           'username': '@abdulrahman',
//           'indices': [
//             44, 56
//           ]
//         }
//       ],
//       'hashtags': [
//         {
//           'id': '#abdulrahman_khalid',
//           'indices': [
//             12, 31
//           ]
//         }
//       ],
//       'number_of_likes': 1,
//       'number_of_rekweeks': 2,
//       'number_of_replies': 3,
//       'reply_to': 'string',
//       'rekweek_info': {
//         'rekweeker_name': 'string',
//         'rekweeker_username': 'string'
//       },
//       'liked_by_user': true,
//       'rekweeked_by_user': true
//     },
//     {
//       'id': '1',
//       'created_at': '2011-04-11T10:20:30Z',
//       'text': '@a @b #c d d #e @f abdulrahman',
//       'media_url': '',
//       'user': {
//         'username': 'ayy_yousif',
//         'screen_name': 'Yousif Khalid',
//         'profile_image_url': 'https://pbs.twimg.com/profile_images/1030601937115381760/tYVfVdN__400x400.jpg',
//         'following': true,
//         'follows_you': true,
//         'blocked': false,
//         'muted': false
//       },
//       'mentions': [
//         {
//           'username': 'string',
//           'indices': [
//             0, 2
//           ]
//         },
//         {
//           'username': 'string',
//           'indices': [
//             3, 5
//           ]
//         },
//         {
//           'username': 'string',
//           'indices': [
//             16, 18
//           ]
//         }
//       ],
//       'hashtags': [
//         {
//           'id': 'string',
//           'indices': [
//             6, 8
//           ]
//         },
//         {
//           'id': 'string',
//           'indices': [
//             13, 15
//           ]
//         }
//       ],
//       'number_of_likes': 2,
//       'number_of_rekweeks': 0,
//       'number_of_replies': 0,
//       'reply_to': 'string',
//       'rekweek_info': {
//         'rekweeker_name': 'string',
//         'rekweeker_username': 'string'
//       },
//       'liked_by_user': false,
//       'rekweeked_by_user': false
//     },
//     {
//       'id': '1',
//       'created_at': '2011-04-11T10:20:30Z',
//       'text': 'hello world',
//       'media_url': 'https://media.idownloadblog.com/wp-content/uploads/2017/03/Twitter-new-2017-avatar-001.png',
//       'user': {
//         'username': 'ayy_yousif',
//         'screen_name': 'Yousif Khalid',
//         'profile_image_url': 'https://pbs.twimg.com/profile_images/1030601937115381760/tYVfVdN__400x400.jpg',
//         'following': true,
//         'follows_you': true,
//         'blocked': false,
//         'muted': false
//       },
//       'mentions': [
//       ],
//       'hashtags': [
//       ],
//       'number_of_likes': 1,
//       'number_of_rekweeks': 2,
//       'number_of_replies': 3,
//       'reply_to': 'string',
//       'rekweek_info': {
//         'rekweeker_name': 'string',
//         'rekweeker_username': 'string'
//       },
//       'liked_by_user': true,
//       'rekweeked_by_user': true
//     },
// ];

// const REPLY2 = [ {
//   'id': '1',
//   'created_at': '2011-04-11T10:20:30Z',
//   'text': 'hello world #abdulrahman_khalid abdulrahman @abdulrahman',
//   'media_url': 'https://media.idownloadblog.com/wp-content/uploads/2017/03/Twitter-new-2017-avatar-001.png',
//   'user': {
//     'username': 'ayy_ahmad',
//     'screen_name': 'Ahmad Khalid',
//     'profile_image_url': 'https://pbs.twimg.com/profile_images/1030601937115381760/tYVfVdN__400x400.jpg',
//     'following': true,
//     'follows_you': true,
//     'blocked': false,
//     'muted': false
//   },
//   'mentions': [
//     {
//       'username': '@abdulrahman',
//       'indices': [
//         44, 56
//       ]
//     }
//   ],
//   'hashtags': [
//     {
//       'id': '#abdulrahman_khalid',
//       'indices': [
//         12, 31
//       ]
//     }
//   ],
//   'number_of_likes': 1,
//   'number_of_rekweeks': 2,
//   'number_of_replies': 3,
//   'reply_to': 'string',
//   'rekweek_info': {
//     'rekweeker_name': 'string',
//     'rekweeker_username': 'string'
//   },
//   'liked_by_user': true,
//   'rekweeked_by_user': true
// },
// {
//   'id': '1',
//   'created_at': '2011-04-11T10:20:30Z',
//   'text': '@a @b #c d d #e @f abdulrahman',
//   'media_url': '',
//   'user': {
//     'username': 'ayy_ahmed',
//     'screen_name': 'ahmad Khalid',
//     'profile_image_url': 'https://pbs.twimg.com/profile_images/1030601937115381760/tYVfVdN__400x400.jpg',
//     'following': true,
//     'follows_you': true,
//     'blocked': false,
//     'muted': false
//   },
//   'mentions': [
//     {
//       'username': 'string',
//       'indices': [
//         0, 2
//       ]
//     },
//     {
//       'username': 'string',
//       'indices': [
//         3, 5
//       ]
//     },
//     {
//       'username': 'string',
//       'indices': [
//         16, 18
//       ]
//     }
//   ],
//   'hashtags': [
//     {
//       'id': 'string',
//       'indices': [
//         6, 8
//       ]
//     },
//     {
//       'id': 'string',
//       'indices': [
//         13, 15
//       ]
//     }
//   ],
//   'number_of_likes': 2,
//   'number_of_rekweeks': 0,
//   'number_of_replies': 0,
//   'reply_to': 'string',
//   'rekweek_info': {
//     'rekweeker_name': 'string',
//     'rekweeker_username': 'string'
//   },
//   'liked_by_user': false,
//   'rekweeked_by_user': false
// },
// ];
//     // return {ARR, trendsTest, profileUserTest, KWK, Message};
//     return {ARR, KWK, Message, REPLY1, REPLY2};
//  }
// }
