//
//  LRNTableViewManager.m
//  LearningReactNative
//
//  Created by lilei@work on 10/13/17.
//  Copyright © 2017 Facebook. All rights reserved.
//

#import "LRNTableViewManager.h"

@interface LRNTableView : UITableView

@property (nonatomic,readwrite) NSArray   *data;
@property (nonatomic,readwrite) NSString  *viewName;
@property (nonatomic,readwrite) CGFloat   cellHeight;

@end

@protocol LRNTableViewCell <NSObject>

- (void)setData:(NSDictionary *)data;

@end

@interface LRNTableViewManager()<UITableViewDataSource,UITableViewDelegate>

@end

@implementation LRNTableViewManager

RCT_EXPORT_MODULE()

RCT_EXPORT_VIEW_PROPERTY(data, NSArray)
RCT_EXPORT_VIEW_PROPERTY(viewName, NSString)
RCT_EXPORT_VIEW_PROPERTY(cellHeight, CGFloat)

- (UIView *)view
{
  UITableView *view = [[LRNTableView alloc] init];
  view.delegate = self;
  view.dataSource = self;
  
  return view;
}

- (NSInteger)tableView:(UITableView *)tableView numberOfRowsInSection:(NSInteger)section
{
  return ((LRNTableView *)tableView).data.count;
}

- (UITableViewCell *)tableView:(UITableView *)tableView cellForRowAtIndexPath:(NSIndexPath *)indexPath
{
  UITableViewCell *cell = [tableView dequeueReusableCellWithIdentifier:((LRNTableView *)tableView).viewName];
  NSDictionary *json = ((LRNTableView *)tableView).data[indexPath.row];
  [((id<LRNTableViewCell>)cell) setData:json];
  return cell;
}

- (CGFloat)tableView:(UITableView *)tableView heightForRowAtIndexPath:(NSIndexPath *)indexPath
{
  return ((LRNTableView *)tableView).cellHeight;
}

@end


@implementation LRNTableView
{
  UINib *_cellNib;
}

- (void)setViewName:(NSString *)viewName
{
  if(!_cellNib){
    _cellNib = [UINib nibWithNibName:viewName bundle:[NSBundle mainBundle]];
  }
  [self registerNib:_cellNib forCellReuseIdentifier:viewName];
}

- (void)setData:(NSArray *)data
{
  _data = data;
  [self reloadData];
}
@end
