import { Component, OnInit } from '@angular/core';
import { MenuItem, Message, TreeNode } from 'primeng/primeng';
import { NodeService } from '../node.service';

@Component({
  selector: 'mg-tree-table', // tslint:disable-line:component-selector
  templateUrl: './tree-table.component.html',
  providers: [NodeService],
  styleUrls: ['./tree-table.component.scss']
})
export class TreeTableComponent implements OnInit {
  msgs: Message[];
  files1: TreeNode[];
  files2: TreeNode[];
  files3: TreeNode[];
  files4: TreeNode[];
  files5: TreeNode[];
  files6: TreeNode[];
  lazyFiles: TreeNode[];
  selectedFile: TreeNode;
  selectedFile2: TreeNode;
  selectedFiles: TreeNode[];
  selectedFiles2: TreeNode[];
  items: MenuItem[];

  date: Date;
  rawFileTypes: string[];
  fileTypes: string[];

  constructor(private nodeService: NodeService) {}

  ngOnInit() {
    this.nodeService.getFilesystem().then(files => (this.files1 = files));
    this.nodeService.getFilesystem().then(files => (this.files2 = files));
    this.nodeService.getFilesystem().then(files => (this.files3 = files));
    this.nodeService.getFilesystem().then(files => (this.files4 = files));
    this.nodeService.getFilesystem().then(files => (this.files5 = files));
    this.nodeService.getFilesystem().then(files => (this.files6 = files));
    this.nodeService
      .getLazyFilesystem()
      .then(files => (this.lazyFiles = files));

    this.items = [
      {
        label: 'View',
        icon: 'fa-search',
        command: event => this.viewNode(this.selectedFile2)
      },
      {
        label: 'Delete',
        icon: 'fa-close',
        command: event => this.deleteNode(this.selectedFile2)
      }
    ];
    this.rawFileTypes = ['Folder', 'Document', 'Resume', 'Text', 'File'];
  }

  search(event) {
    this.fileTypes = [];
    if (event.query) {
      this.fileTypes = this.rawFileTypes.filter(value => {
        return value.toLowerCase().indexOf(event.query.toLowerCase()) !== -1;
      });
    } else {
      this.fileTypes = this.rawFileTypes;
    }
  }

  nodeSelect(event) {
    this.msgs = [];
    this.msgs.push({
      severity: 'info',
      summary: 'Node Selected',
      detail: event.node.data.name
    });
  }

  nodeUnselect(event) {
    this.msgs = [];
    this.msgs.push({
      severity: 'info',
      summary: 'Node Unselected',
      detail: event.node.data.name
    });
  }

  nodeExpand(event) {
    if (event.node) {
      // in a real application, make a call to a remote url to load children of the current node and add the new nodes as children
      this.nodeService
        .getLazyFilesystem()
        .then(nodes => (event.node.children = nodes));
    }
  }

  viewNode(node: TreeNode) {
    this.msgs = [];
    this.msgs.push({
      severity: 'info',
      summary: 'Node Selected',
      detail: node.data.name
    });
  }

  deleteNode(node: TreeNode) {
    node.parent.children = node.parent.children.filter(
      n => n.data !== node.data
    );
    this.msgs = [];
    this.msgs.push({
      severity: 'info',
      summary: 'Node Deleted',
      detail: node.data.name
    });
  }
}
