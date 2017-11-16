function triangle(angle1, angle2, angle3) {
  var maxAngle = Math.max(angle1, angle2, angle3);
  var minAngle = Math.min(angle1, angle2, angle3);

  if (minAngle <= 0) return 'invalid';
  if (angle1 + angle2 + angle3 !== 180) return 'invalid';
  if (maxAngle === 90) return 'right';
  return (maxAngle < 90) ? 'acute' : 'obtuse';
}

assertEqual('acute', triangle, 60, 70, 50);       // "acute"
assertEqual('right', triangle, 30, 90, 60);       // "right"
assertEqual('obtuse', triangle, 120, 50, 10);      // "obtuse"
assertEqual('invalid', triangle, 0, 90, 90);        // "invalid"
assertEqual('invalid', triangle, 50, 50, 50);       // "invalid"
