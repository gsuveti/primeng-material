import { Component, OnInit } from '@angular/core';
import { NodeService } from '../../node.service';
import { TreeNode } from 'primeng/primeng';

@Component({
  selector: 'primeng-material-tree-drag-drop',
  templateUrl: './tree-drag-drop.component.html',
  styleUrls: ['./tree-drag-drop.component.scss']
})
export class TreeDragDropComponent implements OnInit {
  filesTree1: TreeNode[];
  filesTree2: TreeNode[];
  filesTree3: TreeNode[];

  constructor(private nodeService: NodeService) {}

  ngOnInit() {
    this.nodeService.getFiles().then(files => (this.filesTree1 = files));
    this.filesTree2 = [
      {
        label: 'Backup',
        data: 'Backup Folder',
        expandedIcon: 'fa-folder-open',
        collapsedIcon: 'fa-folder'
      }
    ];
    this.filesTree3 = [
      {
        label: 'Storage',
        data: 'Storage Folder',
        expandedIcon: 'fa-folder-open',
        collapsedIcon: 'fa-folder'
      }
    ];
  }
}
