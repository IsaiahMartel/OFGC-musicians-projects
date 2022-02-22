<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Export to PDF</title>
</head>
<body>
    <table>
        <thead><tr>
            <th>Tipo</th>
            <th>Sala</th>
            <th>Fecha</th>
            <th>Hora</th>
            <th>Notas</th>
        </tr></thead>

    <tbody>
        <?php $__currentLoopData = $schedule; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $schedules): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
        <tr>
            <td><?php echo e($schedules->typeschedules->nameType); ?></td>
            <td><?php echo e($schedules->rooms->nameRoom); ?></td>
            <td><?php echo e($schedules->date); ?></td>
            <td><?php echo e($schedules->hourRange); ?></td>
            <td><?php echo e($schedules->note); ?></td>
            
            <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
        </tr>
    </tbody>
     
    </table>
</body>
</html><?php /**PATH C:\Users\Isaiah DAM TARDE\Desktop\OFGC app\AuditorioIonicLaravel\backend\resources\views/schedules.blade.php ENDPATH**/ ?>