import { Injectable } from '@angular/core';
import { TreeNode } from 'primeng/primeng';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class NodeService {
  constructor(private http: HttpClient) {}

  getFilesystem(): Promise<TreeNode[]> {
    return this.http
      .get('assets/data/filesystem.json')
      .toPromise()
      .then(res => <TreeNode[]>res);
  }
  getLazyFilesystem(): Promise<TreeNode[]> {
    return this.http
      .get('assets/data/lazyfilesystem.json')
      .toPromise()
      .then(res => <TreeNode[]>res);
  }
  getFiles(): Promise<TreeNode[]> {
    return this.http
      .get('assets/data/files.json')
      .toPromise()
      .then(res => <TreeNode[]>res);
  }

  getLazyFiles(): Promise<TreeNode[]> {
    return this.http
      .get('assets/data/files.json')
      .toPromise()
      .then(res => <TreeNode[]>res);
  }
}
