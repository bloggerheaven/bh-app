import {Injectable} from '@angular/core';
import {Post} from '../models/post';
import {Storage, SqlStorage} from 'ionic-angular';
import {SingleTrack} from '../models/single_track';
import {Duration} from '../models/duration';

@Injectable()
export class SingleTrackService {
  private track: SingleTrack;
  private storage: Storage;
  private post: Post;
  private duration: Duration;

  constructor() {
    this.storage = new Storage(SqlStorage);
    this.storage.query('CREATE TABLE IF NOT EXISTS tracks (id INTEGER PRIMARY KEY AUTOINCREMENT, ' +
      'postId INTEGER, duration INTEGER)');
    this.duration = new Duration;
  }

  specify(post: Post) {
    this.post = post;
  }

  start() {
    this.duration.start();
  }

  end() {
    this.duration.end();
    this.buildTrack();
    this.saveTrack();
  }

  private buildTrack() {
    this.track = new SingleTrack({postId: this.post.id, duration: this.duration.milliseconds()});
  }

  private saveTrack() {
    this.storage.query('INSERT INTO tracks(postId, duration) VALUES (?,?)', [this.track.postId, this.track.duration]);
  }

  private _selectTracks() {
    this.storage.query('SELECT * FROM tracks').then((data) => {
      const rows = data.res.rows;

      const tracks = Object.keys(rows).reduce(function (tracks: SingleTrack[], index: string) {
        let trackOptions = rows[index];

        tracks.push(new SingleTrack({
          id: trackOptions.id,
          postId: trackOptions.postId,
          duration: trackOptions.duration
        }));

        return tracks;
      }, []);
    });
  }
}
