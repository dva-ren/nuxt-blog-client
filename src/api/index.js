import { articleApi } from '@/api/article';
import { commentApi } from '@/api/comment';
import { frontendApi } from '@/api/frontend';
import { githubUserApi } from '@/api/githubUser';
import { interactionApi } from '@/api/interaction';
import { linkApi } from '@/api/link';
import { musicApi } from '@/api/music';
import { positionApi } from '@/api/position';
import { qqUserApi } from '@/api/qqUser';
import { starApi } from '@/api/star';
import { statisApi } from '@/api/statis';
import { tagApi } from '@/api/tag';
import { themeApi } from '@/api/theme';
import { typeApi } from '@/api/type';
import { userApi } from '@/api/user';
import { visitorLogApi } from '@/api/visitorLog';
import { worksApi } from '@/api/works';

export class Api {
  service = null;
  visitorLog;
  frontend;
  article;
  tag;
  music;
  theme;
  type;
  user;
  link;
  star;
  works;
  comment;
  statis;
  position;
  qqUser;
  githubUser;
  interaction;
  constructor(service) {
    this.service = service;
    this.visitorLog = visitorLogApi(service);
    this.frontend = frontendApi(service);
    this.article = articleApi(service);
    this.tag = tagApi(service);
    this.music = musicApi(service);
    this.theme = themeApi(service);
    this.user = userApi(service);
    this.type = typeApi(service);
    this.star = starApi(service);
    this.link = linkApi(service);
    this.works = worksApi(service);
    this.comment = commentApi(service);
    this.statis = statisApi(service);
    this.position = positionApi(service);
    this.qqUser = qqUserApi(service);
    this.githubUser = githubUserApi(service);
    this.interaction = interactionApi(service);
  }
}
