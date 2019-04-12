import { TestBed } from '@angular/core/testing';

import { KweeksService } from './kweeks.service';


describe('kweekS', () => {
  const kweekS: KweeksService = new KweeksService();
  let KWEEKS;
  const hashtagStartTagOpen: String = '<a href=\'';
  const mentionStartTagOpen: String = '<a href=\'';
  const startTagClose: String = '\'>';
  const endTag: String = '</a>';
  // let mockDataService;
  // let mockActivatedRoute;
  beforeEach(() => {
    // Test objects to unit test kweeks before each unit test
    KWEEKS = [
      {
        'id': '1',
        'created_at': '2011-04-11T10:20:30Z',
        'text': 'hello world #abdulrahman_khalid abdulrahman @abdulrahman',
        'media_url': 'https://media.idownloadblog.com/wp-content/uploads/2017/03/Twitter-new-2017-avatar-001.png',
        'user': {
          'username': 'ayy_abdulrahman',
          'screen_name': 'Abdulrahman Khalid',
          'profile_image_url': 'https://pbs.twimg.com/profile_images/1030601937115381760/tYVfVdN__400x400.jpg',
          'following': true,
          'follows_you': true,
          'blocked': false,
          'muted': false
        },
        'mentions': [
          {
            'username': '@abdulrahman',
            'indices': [
              44, 56
            ]
          }
        ],
        'hashtags': [
          {
            'id': '#abdulrahman_khalid',
            'indices': [
              12, 31
            ]
          }
        ],
        'number_of_likes': 1,
        'number_of_rekweeks': 2,
        'number_of_replies': 3,
        'reply_to': 'string',
        'rekweek_info': {
          'rekweeker_name': 'string',
          'rekweeker_username': 'string'
        },
        'liked_by_user': true,
        'rekweeked_by_user': true
      },
      {
        'id': '2',
        'created_at': '2011-04-11T10:20:30Z',
        'text': '@a @b #c d d #e @f abdulrahman',
        'media_url': '',
        'user': {
          'username': 'ayy_abdulrahman',
          'screen_name': 'Abdulrahman Khalid',
          'profile_image_url': 'https://pbs.twimg.com/profile_images/1030601937115381760/tYVfVdN__400x400.jpg',
          'following': true,
          'follows_you': true,
          'blocked': false,
          'muted': false
        },
        'mentions': [
          {
            'username': 'string',
            'indices': [
              0, 2
            ]
          },
          {
            'username': 'string',
            'indices': [
              3, 5
            ]
          },
          {
            'username': 'string',
            'indices': [
              16, 18
            ]
          }
        ],
        'hashtags': [
          {
            'id': 'string',
            'indices': [
              6, 8
            ]
          },
          {
            'id': 'string',
            'indices': [
              13, 15
            ]
          }
        ],
        'number_of_likes': 2,
        'number_of_rekweeks': 0,
        'number_of_replies': 0,
        'reply_to': 'string',
        'rekweek_info': {
          'rekweeker_name': 'string',
          'rekweeker_username': 'string'
        },
        'liked_by_user': false,
        'rekweeked_by_user': false
      },
      {
        'id': '3',
        'created_at': '2011-04-11T10:20:30Z',
        'text': 'hello world',
        'media_url': 'https://media.idownloadblog.com/wp-content/uploads/2017/03/Twitter-new-2017-avatar-001.png',
        'user': {
          'username': 'ayy_abdulrahman',
          'screen_name': 'Abdulrahman Khalid',
          'profile_image_url': 'https://pbs.twimg.com/profile_images/1030601937115381760/tYVfVdN__400x400.jpg',
          'following': true,
          'follows_you': true,
          'blocked': false,
          'muted': false
        },
        'mentions': [
        ],
        'hashtags': [
        ],
        'number_of_likes': 1,
        'number_of_rekweeks': 2,
        'number_of_replies': 3,
        'reply_to': 'string',
        'rekweek_info': {
          'rekweeker_name': 'string',
          'rekweeker_username': 'string'
        },
        'liked_by_user': true,
        'rekweeked_by_user': true
      }
    ];

    // mockDataService = jasmine.createSpyObj(['getKweeks']);
    // mockActivatedRoute = jasmine.createSpyObj(['snapshot']);

  });

  describe('injectTagsInText', () => {
    it('should return inject the tags correctly', () => {
      // Arrange
      // Act
      kweekS.injectTagsInText(KWEEKS);
      // Assert
      // First Kweek Test
      // Text before injection: 'hello world #abdulrahman_khalid abdulrahman @abdulrahman'
      let toBeStr =
      'hello world ' + hashtagStartTagOpen + '/search/people?filterBy=#abdulrahman_khalid&src=hash'
      + startTagClose + '#abdulrahman_khalid' + endTag + ' abdulrahman '
      + mentionStartTagOpen + '/profile/abdulrahman' + startTagClose
      + '@abdulrahman' + endTag;
      expect(KWEEKS[0].text).toBe(toBeStr); // expect the output to be as toBeStr argument
      // Second Kweek Test
      // Text before injection: '@a @b #c d d #e @f abdulrahman'
      toBeStr =
        mentionStartTagOpen + '/profile/a' + startTagClose + '@a' + endTag + ' '
        + mentionStartTagOpen + '/profile/b' + startTagClose + '@b' + endTag + ' '
        + hashtagStartTagOpen + '/search/people?filterBy=#c&src=hash' + startTagClose + '#c'
        + endTag + ' d d ' + hashtagStartTagOpen + '/search/people?filterBy=#e&src=hash'
        + startTagClose + '#e' + endTag + ' '  + mentionStartTagOpen + '/profile/f'
        + startTagClose + '@f' + endTag + ' abdulrahman';
      expect(KWEEKS[1].text).toBe(toBeStr); // expect the output to be as toBeStr argument
      // Third Kweek Test
      // Text before injection: 'hello world'
      toBeStr = 'hello world';
      expect(KWEEKS[2].text).toBe(toBeStr); // expect the output to be as toBeStr argument
    });
  });
});
